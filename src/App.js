/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, CardItem } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import firebase from "react-native-firebase";

import reducers from "./reducers";
import RouterComponent from "./RouterComponent";

//ignore a warning
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

class App extends Component {
  componentWillMount() {
    const enabled = firebase.messaging().hasPermission();
    //TODO throw catch around this I think ?
    if (!enabled) firebase.messaging().requestPermission();

    // Build a channel
    const channel = new firebase.notifications.Android.Channel(
      "test-channel",
      "Test Channel",
      firebase.notifications.Android.Importance.Max
    ).setDescription("My apps test channel");

    // Create the channel
    firebase.notifications().android.createChannel(channel);
    console.log("All channel setup")
  }

  componentDidMount() { 
    this.notificationDisplayedListener = firebase
      .notifications()
      .onNotificationDisplayed(notification => {
        // Process your notification as required
        // ANDROID: Remote notifications do not contain the channel ID. You will have to specify this manually if you'd like to re-display the notification.
        console.log("On notification displayed", notification);
        notification.android
          .setChannelId("test-channel")
          .android.setSmallIcon("ic_launcher");

        firebase.notifications().onNotificationOpened( (openedNotification) => {
          console.log(openedNotification.notification.notificationId, "In the remove on open ?");
          firebase.notifications().removeDeliveredNotification(openedNotification.notification.notificationId);
        })
      });
    this.notificationListener = firebase
      .notifications()
      .onNotification(notification => {
        // Process your notification as required
        console.log("On notification show time", notification.data.utcTime);
        notification.android
          .setChannelId("test-channel")
          .android.setSmallIcon("ic_launcher");

        firebase.notifications().displayNotification(notification);

      });
  }

  componentWillUnmount() {
      this.notificationDisplayedListener();
      this.notificationListener();
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <RouterComponent />               
      </Provider>          
    );
  }
}

export default App;
