import React, { Component } from "react";
import { View, Text, Image, FlatList } from "react-native";
import { connect } from "react-redux";
import moment from "moment";

import { Card, CardItem } from "./common";
import {
  getMedicineDetails,
  clearMedicineDetails
} from "../actions/MedicineDetailsAction";
import LoadingAsync from "./LoadingAsync";

class MedicineDetail extends Component {
  componentWillMount() {
    this.props.getMedicineDetails(this.props.prescriptionId);
  }

  componentWillUnmount() {
    console.log("Im bout to be called");
    this.props.clearMedicineDetails();
  }

  renderAlert(element) {
    let alert = element.item;
    return (
      <Card>
        <CardItem>
          <Text>
            {`Alert# ${element.index + 1}: `}
            {moment
              .utc(alert.alertDateTime)
              .local()
              .format("lll")}
          </Text>
        </CardItem>
      </Card>
    );
  }

  render() {
    if (!this.props.prescriptionWithAlerts) return <LoadingAsync />;

    const {
      prescriptionName,
      shape,
      identifiers,
      color,
      dosage,
      warnings,
      currentNumberOfDoses,
      doctorNotes,
      imageUrl,
      scheduledAlerts
    } = this.props.prescriptionWithAlerts;
    const {
      alertTextStyle,
      titleStyle,
      doseViewStyle,
      containerStyle,
      categoryStyle,
      imageStyle
    } = styles;
    return (
      <View style={containerStyle}>
        <Card>
          <CardItem
            style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
          >
            <Text style={titleStyle}>
              {prescriptionName}
              's Details
            </Text>
          </CardItem>
          <CardItem>
            <View style={imageStyle}>
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
          <CardItem style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
            <View style={doseViewStyle}>
              <Text>
                <Text style={categoryStyle}>Description:</Text>{" "}
                {`${color} and ${shape} with ${identifiers} marking(s)`}
              </Text>
              <Text>
                <Text style={categoryStyle}>Dosage:</Text> {dosage}{" "}
              </Text>
              <Text>
                <Text style={categoryStyle}>Remaining Doses:</Text>{" "}
                {currentNumberOfDoses}
              </Text>
              <Text>
                <Text style={categoryStyle}>Warnings:</Text>{" "}
                {warnings || "(none)"}{" "}
              </Text>
              <Text>
                <Text style={categoryStyle}>Doctor's Notes:</Text>{" "}
                {doctorNotes || "(none)"}
              </Text>
            </View>
          </CardItem>
        </Card>
        <Text style={alertTextStyle}>
          Upcoming Alerts for {prescriptionName}
        </Text>
        <FlatList
          data={scheduledAlerts}
          renderItem={this.renderAlert}
          keyExtractor={alert => alert.alertDateTime}
        />
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    backgroundColor: "#c1e8ff",
    flex: 1
  },
  categoryStyle: { fontWeight: "bold" },
  titleStyle: {
    fontSize: 24,
    color: "steelblue",
    flex: 1,
    textAlign: "center"
  },
  doseViewStyle: {
    flex: 1
  },
  alertTextStyle: {
    borderBottomColor: "steelblue",
    borderBottomWidth: 1,
    color: "steelblue",
    paddingTop: 10,
    paddingBottom: 5,
    fontSize: 20,
    textAlign: "center"
  },
  imageStyle: {
    flex: 1,
    alignItems: "center"
  }
};

const mapStateToProps = (state) => {
  return {
    prescriptionWithAlerts: state.details.medicineDetails
  };
};

export default connect(
  mapStateToProps,
  {
    getMedicineDetails,
    clearMedicineDetails
  }
)(MedicineDetail);
