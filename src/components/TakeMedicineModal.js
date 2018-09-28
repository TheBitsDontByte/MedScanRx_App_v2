import React, { Component } from "react";
import { View, Text, Modal, Image } from "react-native";
import { connect } from "react-redux";

import { Button, Card, CardItem } from "./common";
import { getAllUpcomingAlerts, takeMedicine} from '../actions/TakeMedicineModalActions'

class TakeMedicineModal extends Component {
  constructor() {
    super();

    this.state = {
      currentAlertIndex: 0,
      takenMedicineIndexes: [],
      test: "test"
    };
    this.previousMedicine = this.previousMedicine.bind(this);
    this.nextMedicine = this.nextMedicine.bind(this);
    this.takeMedicine = this.takeMedicine.bind(this);
  }

  componentWillMount() {
    this.props.getAllUpcomingAlerts(this.props.patientId);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.upcomingAlerts) {
      this.setState({
        totalUpcomingAlerts: newProps.upcomingAlerts.length,
        displayedAlert: newProps.upcomingAlerts[0],
        upcomingAlerts: newProps.upcomingAlerts
      }); 
    }
  }

  previousMedicine() {
    let newAlertIndex;
    if (this.state.currentAlertIndex == 0)
      newAlertIndex = this.state.totalUpcomingAlerts - 1;
    else newAlertIndex = this.state.currentAlertIndex - 1;

    this.setState({
      displayedAlert: this.state.upcomingAlerts[newAlertIndex],
      currentAlertIndex: newAlertIndex
    });
  }

  nextMedicine() {
    let newAlertIndex;
    if (this.state.currentAlertIndex == this.state.totalUpcomingAlerts - 1)
      newAlertIndex = 0;
    else newAlertIndex = this.state.currentAlertIndex + 1;

    this.setState({
      displayedAlert: this.state.upcomingAlerts[newAlertIndex],
      currentAlertIndex: newAlertIndex
    });
  }

  takeMedicine() {
    this.props.takeMedicine(
      this.state.upcomingAlerts[this.state.currentAlertIndex].prescriptionAlertId
    );

    let upcomingAlerts = this.state.upcomingAlerts;
    upcomingAlerts.splice(this.state.currentAlertIndex, 1);

    if (upcomingAlerts.length == 0) this.props.closeModal();

    this.setState({
      upcomingAlerts,
      currentAlertIndex: 0,
      displayedAlert: upcomingAlerts[0],
      totalUpcomingAlerts: upcomingAlerts.length
    });
  }

  render() {
    let {
      outerModalStyle,
      innerModalStyle,
      imageViewStyle,
      buttonContainerStyle,
      arrowButtonStyle,
      takeButtonStyle,
      medicineNameTextStyle,
      medicineNameViewStyle,
      categoryStyle
    } = styles;

    if (!this.state.upcomingAlerts) return <View />;
    const {
      color,
      imageUrl,
      prescriptionName,
      shape,
      identifiers,
      dosage
    } = this.state.displayedAlert;

    return (
      <Modal
        animationType="fade"
        visible={this.props.showModal}
        transparent={true}
        onRequestClose={() => this.props.closeModal()}
      >
        <View style={outerModalStyle}>
          <View style={innerModalStyle}>
            <View>
              <Card>
                <CardItem>
                  <View style={medicineNameViewStyle}>
                    <Text style={medicineNameTextStyle}>
                      {prescriptionName}
                    </Text>
                  </View>
                </CardItem>
                <CardItem>
                  <View style={imageViewStyle}>
                    <Image
                      style={{ width: 200, height: 200 }}
                      defaultSource={require("../media/Loading.png")}
                      source={
                        imageUrl
                          ? { uri: imageUrl }
                          : require("../media/No_image.png")
                      }
                    />
                  </View>
                </CardItem>
                <CardItem>
                  <View>
                    <Text>
                      <Text style={categoryStyle}>Description:</Text>{" "}
                      {`${color} and ${shape} with ${identifiers} marking(s)`}
                    </Text>
                    <Text>
                      <Text style={categoryStyle}>Dosage:</Text> {dosage}{" "}
                    </Text>
                  </View>
                </CardItem>
              </Card>
              <View style={medicineNameViewStyle}>
                <Text>{this.state.totalUpcomingAlerts} Medicines Left</Text>
              </View>
              <View style={buttonContainerStyle}>
                <View style={arrowButtonStyle}>
                  <Button onPress={this.previousMedicine}>{"<<"}</Button>
                </View>
                <View style={takeButtonStyle}>
                  <Button onPress={this.takeMedicine}>Take Medicine!</Button>
                </View>
                <View style={arrowButtonStyle}>
                  <Button onPress={this.nextMedicine}>{">>"}</Button>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = {
  medicineNameViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  medicineNameTextStyle: {
    fontSize: 26,
    fontWeight: "500",
    color: "steelblue"
  },
  categoryStyle: { fontWeight: "bold" },
  buttonContainerStyle: {
    padding: 10,
    flexDirection: "row",
    position: "relative"
  },
  imageViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  outerModalStyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000080"
  },
  innerModalStyle: {
    height: 450,
    width: 300,
    backgroundColor: "#c1e8ff",
    borderColor: "steelblue",
    borderWidth: 3,
    padding: 10,
    borderRadius: 10
  },
  arrowButtonStyle: {
    flex: 1,
    height: 45
  },
  takeButtonStyle: {
    flex: 3,
    height: 45
  }
};
const mapStateToProps = state => {
  console.log(state, "modalState");
  const newState = {};
  if (state.auth.patientId) newState.patientId = state.auth.patientId;

  if (state.modal.allUpcomingAlerts)
    newState.upcomingAlerts = state.modal.allUpcomingAlerts;

  return newState;
};

export default connect(
  mapStateToProps,
  { getAllUpcomingAlerts, takeMedicine }
)(TakeMedicineModal);
