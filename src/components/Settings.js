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
        <Card>
          <CardItem>
            <Text>Barcode Scanner Test</Text>
          </CardItem>
          {/* <CardItem>
            <Button onPress={() => this.onScannerPress()}>Test Scanner</Button>
          </CardItem>
          <CardItem>
            {this.props.barcode ? (
              <Text>{`Barcode Scanned: ${this.props.barcode}`}</Text>
            ) : (
              <Text>{"No scans yet, press button to test"}</Text>
            )}
          </CardItem> */}
        </Card>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { barcode: state.scanner.barcode };
};

export default connect(mapStateToProps)(Settings);
