import axios from "axios";
import { BASE_URL } from "../dev_misc/globals";

export const GET_UPCOMING_ALERTS_FOR_MODAL = "get_upcoming_alerts_for_modal";

export const getAllUpcomingAlerts = patientId => {
    return dispatch => {
      axios.get(`${BASE_URL}/Api/App/Prescription/UpcomingAlerts/${patientId}`)
        .then(response => { 
          dispatch({
            type: GET_UPCOMING_ALERTS_FOR_MODAL,
            payload: response.data
          }) 
          console.log("the modal get upcoming response", response)
        })
        .catch(error => {
          console.log("Error response ", error);
        });
    };
  };

  export const takeMedicine = (prescriptionId) => {
    return dispatch => {
      axios.put(`${BASE_URL}/Api/App/Prescription/${prescriptionId}`)
      .then(response => {
        console.log("Response in takign", response)
      })
      .catch(error => {
        console.log("Error in taking", error)
      })
    }
  }
  