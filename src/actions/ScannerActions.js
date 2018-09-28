export const READ_BARCODE = "read_barcode";

export const readBarcode = (barcode) => {
    return {
        type: READ_BARCODE,
        payload: barcode 
    }
}