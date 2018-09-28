import { GET_ALL_ALERTS, ALERTS_CLEAR_VALUES } from "../actions/AlertsActions";

const initialState = {
  allUpcomingAlerts: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ALERTS:
      return { ...state, allUpcomingAlerts: action.payload };
    case ALERTS_CLEAR_VALUES:
      return { ...initialState };
    default:
      return state;
  }
};
