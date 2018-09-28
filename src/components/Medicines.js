import React, { Component } from "react";
import { View } from "react-native";

import MedicineList from "./MedicineList";


class Medicines extends Component {
  componentWillUnmount() {
    this.props.callback();
  }

  render() {
    const { containerStyle,  } = styles;
    return (
      <View style={containerStyle}>
        <MedicineList /> 
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

export default Medicines;
