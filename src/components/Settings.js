import React, { Component } from "react";
import { CardItem, Card, Button } from "./common";
import { Text, View } from "react-native";
import LogoutButton from "./LogoutButton";
import { Actions } from "react-native-router-flux";

import { connect } from "react-redux";

class Settings extends Component {
  // onScannerPress() {
  //   Actions.scannerTester();
  // }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#c1e8ff" }}>
        <Card>
          <CardItem>
            <Text>Account Settings</Text>
          </CardItem>
          <CardItem>
            <Button>Change Password (not yet)</Button>
          </CardItem>
          <LogoutButton />
        </Card>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { barcode: state.scanner.barcode };
};

export default connect(mapStateToProps)(Settings);
