import axios from "axios";
import { BASE_URL } from "../dev_misc/globals";

export const GET_ALL_MEDICINES = "get_all_medicines";
export const GET_MEDICINE = "get_medicine";
export const GET_PRESCRIPTION_WITH_ALERTS = "get_prescription_with_alerts";
export const MEDICINE_CLEAR_VALUES = "medicine_clear_values";

export const getAllPrescriptionInfo = (patientId) => {
  return dispatch => {
    axios.get(`${BASE_URL}/Api/App/Prescription/AllPrescriptions/${patientId}`)
    .then(response => {
      dispatch({
        type: GET_ALL_MEDICINES,
        payload: response.data
      })
    }).catch(response => {
      console.log("Im an error in getAllPrescriptionInfo")
    })  
  }
}

export const clearMedicineValues = () => {
  return {
    type: MEDICINE_CLEAR_VALUES
  }
}



