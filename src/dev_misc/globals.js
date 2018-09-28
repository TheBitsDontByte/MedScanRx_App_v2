export const TIMEOUT_DURATION = 10;
export const BASE_URL = "http://localhost:55991"

import moment from "moment";

const now = moment();


export const allMedicines = {
  1: {
    numberOfDoses: 12,
    numberOfRefills: 2,
    shape: "Circular",
    color: "Yellow",
    identifiers: "4590 on one side, W on other",
    warnings: "",
    doctorsNotes: "",
    dosage: "4mg",
    specialInstructions: "Take with food",

    medicineId: 1,
    medicineName: "Wellbutrin",
    description: "Yellow, circular pill",

    alertDateTime: moment()
      .add(2, "m")
      .add(23, "s")
  },
  3: {
    numberOfDoses: 12,
    numberOfRefills: 2,
    shape: "Circular",
    color: "Yellow",
    identifiers: "4590 on one side, W on other",
    warnings: "",
    doctorsNotes: "",
    dosage: "4mg",
    specialInstructions: "Take with food",
    medicineName: "Percoset",
    description: "Green, circular pill",
    dosage: "4mg",
    specialInstructions: "Take with food",
    medicineId: 3,
    alertDateTime: moment().add(46, "m")
  },
  4: {
    numberOfDoses: 12,
    numberOfRefills: 2,
    shape: "Circular",
    color: "Yellow",
    identifiers: "4590 on one side, W on other",
    warnings: "",
    doctorsNotes: "",
    dosage: "4mg",
    specialInstructions: "Take with food",
    medicineName: "Tylenol",
    description: "Blue, circular pill",
    dosage: "4mg",
    specialInstructions: "Take with food",

    medicineId: 4,
    alertDateTime: moment()
      .add(1, "h")
      .add(15, "m")
  },
  5: {
    numberOfDoses: 12,
    numberOfRefills: 2,
    shape: "Circular",
    color: "Yellow",
    identifiers: "4590 on one side, W on other",
    warnings: "",
    doctorsNotes: "",
    dosage: "4mg",
    specialInstructions: "Take with food",
    medicineName: "Benadryl",
    description: "Pink, oblong pill",
    dosage: "4mg",
    specialInstructions: "Take with food",

    medicineId: 5,
    alertDateTime: moment()
      .add(1, "d")
      .add(1, "h")
  },
  6: {
    numberOfDoses: 12,
    numberOfRefills: 2,
    shape: "Circular",
    color: "Yellow",
    identifiers: "4590 on one side, W on other",
    warnings: "",
    doctorsNotes: "",
    dosage: "4mg",
    specialInstructions: "Take with food",
    medicineName: "Hydrocodone",
    description: "Yellow, oblong capsule",
    dosage: "4mg",
    specialInstructions: "Take with food",
    medicineId: 6,
    alertDateTime: moment()
      .add(1, "d")
      .add(3, "h")
  },
  7: {
    numberOfDoses: 12,
    numberOfRefills: 2,
    shape: "Circular",
    color: "Yellow",
    identifiers: "4590 on one side, W on other",
    warnings: "",
    doctorsNotes: "",
    dosage: "4mg",
    specialInstructions: "Take with food",
    medicineName: "Zocor",
    description: "Red liquid",
    dosage: "4ml",
    specialInstructions: "Take after food",
    medicineId: 7,
    alertDateTime: moment()
      .add(1, "d")
      .add(7, "h")
  },
  8: {
    numberOfDoses: 12,
    numberOfRefills: 2,
    shape: "Circular",
    color: "Yellow",
    identifiers: "4590 on one side, W on other",
    warnings: "",
    doctorsNotes: "",
    dosage: "4mg",
    specialInstructions: "Take with food",
    medicineName: "Prilosec",
    description: "Yellow, circular pill",
    dosage: "4mg",
    specialInstructions: "Take orally",
    medicineId: 8,
    alertDateTime: moment()
      .add(2, "d")
      .add(1, "h")
  },
  9: {
    numberOfDoses: 12,
    numberOfRefills: 2,
    shape: "Circular",
    color: "Yellow",
    identifiers: "4590 on one side, W on other",
    warnings: "",
    doctorsNotes: "",
    dosage: "4mg",
    specialInstructions: "Take with food",
    medicineName: "Glucophage",
    description: "Yellow, circular pill",
    dosage: "4mg",
    specialInstructions: "Take with cats",
    medicineId: 9,
    alertDateTime: moment()
      .add(2, "d")
      .add(3, "h")
  },
  10: {
    numberOfDoses: 12,
    numberOfRefills: 2,
    shape: "Circular",
    color: "Yellow",
    identifiers: "4590 on one side, W on other",
    warnings: "",
    doctorsNotes: "",
    dosage: "4mg",
    specialInstructions: "Take with food",
    medicineName: "Lisinopril",
    description: "Yellow, circular pill",
    dosage: "4mg",
    specialInstructions: "Take with food",
    medicineId: 10,
    alertDateTime: moment()
      .add(2, "d")
      .add(8, "h")
  }
};
