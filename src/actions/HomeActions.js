import axios from "axios";
import { BASE_URL } from "../dev_misc/globals";

export const GET_UPCOMING_ALERTS = "get_upcoming_alerts";
export const HOME_CLEAR_VALUES = "home_clear_values";

export const getAllUpcomingAlerts = patientId => {
  return dispatch => {
    axios.get(`${BASE_URL}/Api/App/Prescription/UpcomingAlerts/${patientId}`)
      .then(response => { 
        dispatch({
          type: GET_UPCOMING_ALERTS,
          payload: response.data
        }) 
      })
      .catch(error => {
        console.log("Error response ", error);
      });
  };
};

export const clearValues = () => {
  return {
    type: HOME_CLEAR_VALUES
  };
};
