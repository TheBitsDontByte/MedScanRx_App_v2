import React, { Component } from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import moment from "moment";
import { Actions } from "react-native-router-flux";

import { Card, CardItem } from "./common";

class AlertListDetail extends Component {
  onSpecificAlertPress() {
    Actions.medicineDetail({ prescriptionId: this.props.alert.prescriptionId });
  }

  hasUpcomingAlert(alert) {
    return moment().isAfter(moment.utc(alert).add(-20, "m")) && moment().isBefore(moment.utc(alert).add(35, "m")) 
  }

  render() {
    const {
      upcomingAlertTitleStyle,
      timerViewStyle,
      titleStyle,
      timerTextStyle,
      doseViewStyle
    } = styles;
    const { prescriptionName, nextAlert, imageUrl } = this.props.alert;

    return (
      <TouchableWithoutFeedback onPress={this.onSpecificAlertPress.bind(this)}>
        <View>
          <Card>
            <CardItem
              style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
            >
              {this.hasUpcomingAlert(nextAlert) ? (
                <Text style={upcomingAlertTitleStyle}>{prescriptionName}</Text>
              ) : (
                <Text style={titleStyle}>{prescriptionName}</Text>
              )}
            </CardItem>
            <CardItem
              style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
            >
              <View style={timerViewStyle}>
                <Text style={timerTextStyle}>
                  Take{" "} 
                  {moment
                    .utc(nextAlert)
                    .local()
                    .fromNow()}
                </Text>
              </View>

              <View style={{ flex: 1, alignItems: "center" }}>
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
  upcomingAlertTitleStyle: {
    fontSize: 18,
    flex: 1,
    textAlign: "center",
    color: "red"
  },
  titleStyle: {
    fontSize: 18,
    flex: 1,
    textAlign: "center"
  },
  doseViewStyle: {
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
  }
};

export default AlertListDetail;
