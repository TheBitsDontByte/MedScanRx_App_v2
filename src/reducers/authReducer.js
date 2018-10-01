import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  LOGIN_USER_ERROR,
  LOGGING_IN
} from "../actions";
import { initializeApp } from "../../node_modules/firebase";

//TODO revert
const initialState = {
  email: "test@test.com", //TESTING
  password: "05311983",
  user: null,
  errorMessage: null,
  loading: null,
  patientId: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGGING_IN:
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        patientId: action.payload.patientId,
        error: null,
        loading: null
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
        password: "",
        loading: false
      };
    case LOGOUT_USER:
      return initialState;
    default:
      return state;
  }
};
