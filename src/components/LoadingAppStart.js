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
    const token = await AsyncStorage.getItem("jwt");

    if (token && jwtDecode(token).exp * 1000 > Date.now()) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      reloginUser();
    } else {
      Actions.auth();
    }
  } catch (error) {
    console.log("error in getting item from async storate", error)
    Actions.auth();
  }
};

class LoadingAppStart extends React.Component {
  componentWillMount() {
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
