import {
  HOME_CLEAR_VALUES,
  GET_UPCOMING_ALERTS
} from "../actions/HomeActions";

const initialState = {
  upcomingAlerts: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_UPCOMING_ALERTS:
      return { ...state, allUpcomingAlerts: action.payload };
    case HOME_CLEAR_VALUES:
      return initialState;
    default:
      return state;
  }
};
