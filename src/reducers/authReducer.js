import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  LOGIN_USER_ERROR
} from "../actions";

//TODO revert
const INITIAL_STATE = {
  email: "test@test.com",
  password: "05311983",
  user: null,
  error: "",
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        patientId: action.payload.patientId,
        error: "",
        loading: false
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        error: "Invalid username or password",
        password: "",
        loading: false
      };
    case LOGOUT_USER:
      return INITIAL_STATE;
    default:
      return state;
  }
};
