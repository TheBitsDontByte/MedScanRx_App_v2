import React from "react";
import firebase from "firebase";
import { Actions } from "react-native-router-flux";
import { Text, View } from "react-native";

import { AsyncSpinner, Card } from "./common";

const LoadingAsync = () => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.loadingStyle}>Loading...</Text>
      <AsyncSpinner style={styles.spinnerStyle} />
    </View>
  );
};

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#c1e8ff",
    paddingTop: 100
  },
  loadingStyle: {
    marginTop: 50,
    paddingBottom: 20,
    fontSize: 12,
    textAlign: "center"
  },
  spinnerStyle: {
    justifyContent: "flex-start"
  }
};

export default LoadingAsync;
