import { GET_UPCOMING_ALERTS_FOR_MODAL } from "../actions/TakeMedicineModalActions";

const initialState = {
  upcomingAlerts: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_UPCOMING_ALERTS_FOR_MODAL:
      return { ...state, allUpcomingAlerts: action.payload };

    default:
      return { ...initialState };
  }
};
