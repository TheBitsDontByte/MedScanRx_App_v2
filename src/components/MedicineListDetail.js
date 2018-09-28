import React, { Component } from "react";
import { Text, View, TouchableWithoutFeedback, Image } from "react-native";
import { Actions } from "react-native-router-flux";
import No_image from "../media/No_image.svg";
import { Card, CardItem } from "./common";

class MedicineListDetail extends Component {
  onSpecificMedicinePress() {
    Actions.medicineDetail({
      prescriptionId: this.props.medicine.prescriptionId
    });
  }

  render() {
    const {
      prescriptionName,
      color,
      shape,
      identifiers,
      dosage,
      doctorNotes,
      warnings,
      imageUrl
    } = this.props.medicine;
    const { titleStyle, doseViewStyle, imageViewStyle, categoryStyle } = styles;
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
                    <Text style={categoryStyle}>Doctor's Notes:</Text>{" "}
                    {doctorNotes}{" "}
                  </Text>
                )}
              </View>
              <View style={imageViewStyle}>
                <Image
                  style={{ width: 100, height: 100 }}
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
  titleStyle: {
    fontSize: 18,
    flex: 1,
    textAlign: "center",
    fontWeight: "bold"
  },
  doseViewStyle: {
    flex: 2
  },
  imageViewStyle: {
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
  categoryStyle: {
    fontWeight: "bold"
  }
};

export default MedicineListDetail;
