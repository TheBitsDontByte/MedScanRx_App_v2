import {
  GET_MEDICINE_DETAILS,
  MEDICINE_DETAIL_CLEAR_VALUES
} from "../actions/MedicineDetailsAction";

const initialState = {
  medicineDetails: null
};

export default (state = initialState, action) => {
    console.log("In reducer", action)
  switch (action.type) {
    case GET_MEDICINE_DETAILS:
      return { ...state, medicineDetails: action.payload };
    case MEDICINE_DETAIL_CLEAR_VALUES:
      return { ...initialState };
    default:
      return { ...state };
  }
};
