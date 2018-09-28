import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Vibration,
  Dimensions,
} from 'react-native';
import { readBarcode } from '../actions/ScannerActions'
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux'

// import Camera from 'react-native-camera';

class Scanner extends Component {
  state = {
    successfulReads: 0,
    success: false
  };

  handleBarCodeRead(e) {
    //Vibration.vibrate();
    let { barcode } = this.props.prescriptionWithAlerts;
    console.log("The current number of succes read", this.state.successfulReads)

    if (e.data == barcode){
        this.setState({successfulReads: this.state.successfulReads + 1})
    } else {
        this.setState({successfulReads: 0})
    }

    if (this.state.successfulReads > 3 && !this.state.success){
        console.log("I SHOULD ONLY BE HIT ONCE ")
        this.setState({successfulReads: 0, success: true})
        Actions.pop()
    }
  }

  render() {
      console.log("MedScannerPropsBOYO", this.props)
    let {brandName, color, shape, identifiers } = this.props.prescriptionWithAlerts

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Scan {brandName} 
        </Text> 
        <Text>Description: {color} {shape} marked with {identifiers}</Text> 
        <View style={styles.rectangleContainer}>
          <Camera
            style={styles.camera} 
            type={this.state.cameraType}
            onBarCodeRead={this.handleBarCodeRead.bind(this)}
            //torchMode={Camera.constants.TorchMode.on}
          >
            <View style={styles.rectangleContainer}>
              <View style={styles.rectangle} />
            </View>
          </Camera>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  camera: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: Dimensions.get('window').width,
    width: Dimensions.get('window').width,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  rectangleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  rectangle: {
    height: 250,
    width: 350,
    borderWidth: 2,
    borderColor: 'blue',
    backgroundColor: 'transparent',
  },
});

export default connect(null, {readBarcode})(Scanner);
