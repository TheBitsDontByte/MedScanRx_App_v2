import React, { Component } from "react";
import { View, Text, Image } from "react-native";


class Error extends Component {
  
  render() {
    let { errorMessage } = this.props;

    return (
      <View style={styles.centerStyle}>
        <Image
          style={{ width: 100, height: 100 }}
          source={require("../media/Error.png")}
        />
        <Text>Uh oh ... {errorMessage}</Text>
        <Text>Please restart the app and try again</Text>
      </View>
    );
  }
}

const styles = {
  centerStyle: {
    flex: 1,
    paddingBottom: 100,
    justifyContent: "center",
    alignItems: "center"
  }
};

export default Error;