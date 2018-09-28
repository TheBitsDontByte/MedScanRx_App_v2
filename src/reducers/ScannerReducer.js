import { READ_BARCODE } from '../actions/ScannerActions'

export default (state = {}, action) => {
    switch(action.type) {
        case READ_BARCODE:
        console.log("did I so this right ", action)
            return {barcode: action.payload}
        default: 
            return {...state}
    }

}