// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Vibration,
//   Dimensions,
// } from 'react-native';
// import { readBarcode } from '../actions/ScannerActions'
// import { connect } from 'react-redux';
// import { Actions } from 'react-native-router-flux'

// import Camera from 'react-native-camera';

// class Scanner extends Component {
//   state = {
//     hasBeenRead: false
//   };

//   handleBarCodeRead(e) {
//     //Vibration.vibrate();
//     this.props.readBarcode(e.data);
//     if (!this.state.hasBeenRead){
//       this.setState({hasBeenRead: true})
//       Actions.pop(); 

//     }
//     // const count = ++this.state.count;
//     // this.setState({ 
//     //   scanning: false,
//     //   count,
//     //   barcodeMessage:
//     //     `Scanned ${count === 1
//     //       ? '1 time'
//     //       : `${count} times`}.${'\n'}Barcode: ${e.data}${'\n'}Type: ${e.type}`,
   
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Barcode Scanner{`\n${this.state.barcodeMessage}`}
//         </Text> 
//         <View style={styles.rectangleContainer}>
//           <Camera
//             style={styles.camera} 
//             type={this.state.cameraType}
//             onBarCodeRead={this.handleBarCodeRead.bind(this)}
//             //torchMode={Camera.constants.TorchMode.on}
//           >
//             <View style={styles.rectangleContainer}>
//               <View style={styles.rectangle} />
//             </View>
//           </Camera>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   camera: {
//     flex: 0,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'transparent',
//     height: Dimensions.get('window').width,
//     width: Dimensions.get('window').width,
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
//   rectangleContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'transparent',
//   },
//   rectangle: {
//     height: 250,
//     width: 350,
//     borderWidth: 2,
//     borderColor: '#00FF00',
//     backgroundColor: 'transparent',
//   },
// });

// export default connect(null, {readBarcode})(Scanner);
