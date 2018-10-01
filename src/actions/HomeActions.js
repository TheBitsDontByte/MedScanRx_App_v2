import axios from "axios";
import { BASE_URL } from "../dev_misc/globals";

export const GET_UPCOMING_ALERTS = "get_upcoming_alerts";
export const HOME_CLEAR_VALUES = "home_clear_values";
export const HOME_ERROR_GETTING_UPCOMING_ALERTS = "home_error_getting_upcoming_values";

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
        console.log("error in home get upcoming vals", error, error.response, error.data)
        dispatch ({
          type: HOME_ERROR_GETTING_UPCOMING_ALERTS,
          payload: error.response.data.errorMessage
        })
      });
  };
};

export const clearValues = () => {
  return {
    type: HOME_CLEAR_VALUES
  };
};
