import React, { Component } from "react";
import { View, Text } from "react-native";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";

import NavigationButtons from "./NavigationButtons";
import MedicineAlertList from "./MedicineAlertList";
import { clearValues, getAllUpcomingAlerts } from "../actions";

class Home extends Component {
  onMedicinesPress() {
    this.props.clearValues();
    Actions.medicines({
      callback: () => this.props.getAllUpcomingAlerts(this.props.patientId)
    });
  }

  onAlertsPress() {
    this.props.clearValues();
    Actions.alerts({
      callback: () => this.props.getAllUpcomingAlerts(this.props.patientId)
    });
  }

  render() {
    const { containerStyle, subHeaderStyle } = styles;

    return (
      <View style={containerStyle}>
        <NavigationButtons
          onMedicinesPress={this.onMedicinesPress.bind(this)}
          onAlertsPress={this.onAlertsPress.bind(this)}
        />
        <Text style={subHeaderStyle}>Upcoming Alerts</Text>
        <MedicineAlertList />
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: "#c1e8ff"
  },
  subHeaderStyle: {
    borderBottomColor: "steelblue",
    borderBottomWidth: 1,
    color: "steelblue",
    paddingTop: 10,
    paddingBottom: 5,
    fontSize: 20,
    textAlign: "center"
  }
};

const mapStateToProps = state => {
  return {
    patientId: state.auth.patientId
  };
};

export default connect(
  mapStateToProps,
  { clearValues, getAllUpcomingAlerts }
)(Home);
