import axios from "axios";
import { BASE_URL } from "../dev_misc/globals";

export const GET_ALL_ALERTS = "get_all_alerts";
export const ALERTS_CLEAR_VALUES = "alerts_clear_values";

export const getAllUpcomingAlerts = patientId => {
  return dispatch => {
    axios
      .get(`${BASE_URL}/Api/App/Prescription/AllPrescriptions/${patientId}`)
      .then(response => {
        dispatch({
          type: GET_ALL_ALERTS,
          payload: response.data
        });
      })
      .catch(response => {
        console.log("Im an error in getAllPrescriptionInfo");
      });
  };
};

export const clearAlertsValues = () => {
  return {
    type: ALERTS_CLEAR_VALUES
  }
}