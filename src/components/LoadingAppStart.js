import React from "react";
import jwtDecode from "jwt-decode";
import { Text, View, AsyncStorage } from "react-native";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import { reloginUser } from "../actions/AuthActions";
import axios from "axios";

import { AsyncSpinner } from "./common";

const getJwt = async reloginUser => {
  try {
    console.log("before token")

    const token = await AsyncStorage.getItem("jwt");
    console.log("the token", token)
    if (token && jwtDecode(token).exp * 1000 > Date.now()) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      console.log("Before logging in");
      reloginUser();
    } else {
      console.log("");

      Actions.auth();
    }
  } catch (error) {
    console.log("Get jwt error", error);
  }
};

class LoadingAppStart extends React.Component {
  componentWillMount() {
    console.log("in will mount before anything");
    getJwt(this.props.reloginUser);
  }

  render() {
    return (
      <View>
        <View style={styles.containerStyle}>
          <Text style={styles.titleStyle}>MedScanRx</Text>
          <AsyncSpinner />
        </View>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    height: "100%",
    flexDirection: "column",
    backgroundColor: "#c1e8ff",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 100
  },
  titleStyle: {
    fontSize: 42,
    textAlign: "center",
    paddingBottom: 20
  }
};

export default connect(
  null,
  { reloginUser }
)(LoadingAppStart);
