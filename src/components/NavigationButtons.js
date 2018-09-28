import React, { Component } from "react";
import { View, Text } from "react-native";
import { Card, Button } from "./common";

class NavigationButtons extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Button
          onPress={this.props.onMedicinesPress}
          newButtonStyle={{ borderRadius: 100 }}
        >
          Medicines
        </Button> 
        <Button
          onPress={this.props.onAlertsPress}
          newButtonStyle={{ borderRadius: 100 }}
        >
          Alerts
        </Button>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    padding: 10,
    flexDirection: "row",
    position: "relative"
  }
};

export default NavigationButtons;
