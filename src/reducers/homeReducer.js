import {
  HOME_CLEAR_VALUES,
  GET_UPCOMING_ALERTS,
  HOME_ERROR_GETTING_UPCOMING_ALERTS
} from "../actions/HomeActions";

const initialState = {
  upcomingAlerts: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_UPCOMING_ALERTS:
      return { ...state, allUpcomingAlerts: action.payload };
    case HOME_CLEAR_VALUES:
      return initialState;
    case HOME_ERROR_GETTING_UPCOMING_ALERTS:
      return {...initialState, homeError: true, errorMessage: action.payload}
    default:
      return state;
  }
};
