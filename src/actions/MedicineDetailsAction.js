import axios from "axios";
import { BASE_URL } from '../dev_misc/globals'

export const MEDICINE_DETAIL_CLEAR_VALUES = "medicine_detail_clear_values";
export const GET_MEDICINE_DETAILS = "get_medicine_details";

export const clearMedicineDetails = () => {
  return {
    type: MEDICINE_DETAIL_CLEAR_VALUES
  };
};

export const getMedicineDetails = prescriptionId => {
  return dispatch => {
      console.log("Action before called");
    axios
      .get(
        `${BASE_URL}/Api/App/Prescription/AllPrescriptionsWithAlerts/${prescriptionId}`
      )
      .then(response => {
        dispatch({
          type: GET_MEDICINE_DETAILS,
          payload: response.data
        });
        console.log("The response from get adfgfgfdgdfll prescrip info", response);
      })
      .catch(response => {
        console.log("Im an error in getAllPrescriptionInfo");
      });
  };
};
