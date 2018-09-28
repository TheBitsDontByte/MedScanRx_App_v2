import {
  GET_ALL_MEDICINES,
  GET_MEDICINE,
  GET_PRESCRIPTION_WITH_ALERTS,
  MEDICINE_CLEAR_VALUES
} from "../actions/medicinesActions";

const initialState = {
  allMedicines : null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MEDICINES:
      return { ...state, allMedicines: action.payload };
    case GET_MEDICINE:
      return { ...state, medicineDetail: action.payload };
    case GET_PRESCRIPTION_WITH_ALERTS:
      return { ...state, prescriptionWithAlerts: action.payload };
    case MEDICINE_CLEAR_VALUES:
      return { initialState };
    default:
      return state;
  }
};
