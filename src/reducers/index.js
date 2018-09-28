import { combineReducers } from 'redux';
import authReducer from './authReducer';
import homeReducer from './homeReducer';
import medicinesReducer from './MedicinesReducer';
import AlertsReducer from './AlertsReducer';
import ScannerReducer from './ScannerReducer';
import MedicineDetailsReducer from './MedicineDetailsReducer'
import TakeMedicineModalReducer from "./TakeMedicineModalReducer"


export default combineReducers({
    auth: authReducer,
    home: homeReducer,
    medicines: medicinesReducer,
    alerts: AlertsReducer,
    scanner: ScannerReducer,
    details: MedicineDetailsReducer,
    modal: TakeMedicineModalReducer
});