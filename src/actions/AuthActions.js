import jwtDecode from "jwt-decode";
import { Actions } from "react-native-router-flux";
import axios from "axios";
import { BASE_URL } from "../dev_misc/globals";
import { AsyncStorage } from "react-native";
import firebase from "react-native-firebase";

export const EMAIL_CHANGED = "email_changed";
export const PASSWORD_CHANGED = "password_changed";
export const LOGIN_USER_SUCCESS = "login_user_success";
export const LOGIN_USER_ERROR = "login_user_error";
export const LOGOUT_USER = "logout_user";
export const LOGGING_IN = "logging_in";

//Auth actions
export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loggingIn = () => {
  return {
    type: LOGGING_IN
  }
}

export const reloginUser = () => {
  return dispatch => {
    firebase
      .messaging()
      .getToken()
      .then(token => {
        axios
          .get(`${BASE_URL}/Api/Auth/Patient/Refresh?FcmToken=${token}`)
          .then(response => {
            setTokenAndDispatch(response.data.token, dispatch).then(() => {
              Actions.main();
            });
          })
          .catch(error => {
            console.log("error on relogin", error.response);
            Actions.auth();
          });
      });
  };
};

export const loginUser = ({ email, password, stayLoggedIn }) => {
  return dispatch => {
    firebase
      .messaging()
      .getToken()
      .then(token => {
        axios
          .post(`${BASE_URL}/Api/Auth/Patient/Login`, {
            userName: email,
            password,
            fcmToken: token
          })
          .then(response => {
            setTokenAndDispatch(response.data.token, dispatch, stayLoggedIn).then(() => {
              Actions.main();
            });
          })
          .catch(error => {
            let errorMessage;
            if (error.response.status === 401)
              errorMessage = "Invalid password or username"
            else 
              errorMessage = error.response.data.errorMessage
            
              dispatch({
              type: LOGIN_USER_ERROR,
              payload: errorMessage
            });
          });
      });
  };
};

const setTokenAndDispatch = async (token, dispatch, stayLoggedIn) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  if (stayLoggedIn)
    await AsyncStorage.setItem("jwt", token);

  let { patientId } = jwtDecode(token);
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: { patientId }
  });
};

// const getFcmToken = async () => {
//   let token = null;
//   await firebase
//     .messaging()
//     .getToken()
//     .then(response => (token = response));
//   console.log("Token after await and then ?", token);
//   return token;
// };

export const logoutUser = () => {
  AsyncStorage.removeItem("jwt");
  delete axios.defaults.headers.common["Authorization"];
  Actions.auth();
  return {
    type: LOGOUT_USER
  };
};

// const loginUserFail = dispatch => {
//   dispatch({ type: LOGIN_USER_FAIL });
// };

// const loginUserSuccess = (dispatch, user, tempPatientId) => {
//   console.log("LoggedInPatientId", tempPatientId);
//   dispatch({
//     type: LOGIN_USER_SUCCESS,
//     payload: { user, patientId: tempPatientId }
//   });

//   Actions.main();
// };
