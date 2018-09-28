import React from "react";
import { Text, View, TouchableWithoutFeedback, Image } from "react-native";
import { Actions } from "react-native-router-flux";

import { Card, CardItem } from "./common";

class MedicineAlertDetail extends React.Component {
  onSpecificMedicinePress() {
    Actions.medicineDetail({
      prescriptionId: this.props.medicine.prescriptionId
    });
  }

  render() {
    const { titleStyle, doseViewStyle, categoryStyle, imageViewStyle } = styles;
    const {
      imageUrl,
      prescriptionName,
      dosage,
      doctorNotes,
      warnings,
      shape,
      color,
      identifiers
    } = this.props.medicine;

    return (
      <TouchableWithoutFeedback
        onPress={this.onSpecificMedicinePress.bind(this)}
      >
        <View>
          <Card>
            <CardItem
              style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
            >
              <Text style={titleStyle}>{prescriptionName}</Text>
            </CardItem>
            <CardItem
              style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
            >
              <View style={doseViewStyle}>
                <Text>
                  <Text style={categoryStyle}>Description:</Text>{" "}
                  {`${color} and ${shape} with ${identifiers} marking(s)`}
                </Text>
                <Text>
                  <Text style={categoryStyle}>Dose:</Text> {dosage}{" "}
                </Text>
                {warnings != "" && (
                  <Text>
                    <Text style={categoryStyle}>Warnings:</Text> {warnings}{" "}
                  </Text>
                )}
                {doctorNotes != "" && (
                  <Text>
                    <Text style={categoryStyle}>Doctor's Notes:</Text>
                    {doctorNotes}{" "}
                  </Text>
                )}
              </View>
              <View style={imageViewStyle}>
                <Image
                  style={{ width: 150, height: 150 }}
                  defaultSource={require("../media/Loading.png")}
                  source={
                    imageUrl
                      ? { uri: imageUrl }
                      : require("../media/No_image.png")
                  }
                />
              </View>
            </CardItem>
          </Card>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  categoryStyle: {
    fontWeight: "bold"
  },
  titleStyle: {
    fontSize: 22,
    flex: 1,
    textAlign: "center",
    fontWeight: "bold"
  },
  doseViewStyle: {
    justifyContent: "space-around",
    flex: 1
  },
  doseTextStyle: {},
  timerViewStyle: {
    justifyContent: "space-around",
    flex: 1
  },
  timerTextStyle: {
    textAlign: "center",
    fontSize: 22
  },
  imageViewStyle: {
    flex: 1
  }
};

export default MedicineAlertDetail;
