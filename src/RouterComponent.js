import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { Scene, Router, Actions, ActionConst } from "react-native-router-flux";
import connect from "react-redux";

import LoginForm from "./components/LoginForm";
import Header from "./components/common";
import Home from "./components/Home";
import LoadingAppStart from "./components/LoadingAppStart";
import Settings from "./components/Settings";
import Medicines from "./components/Medicines";
import MedicineDetail from "./components/MedicineDetail";
import Alerts from "./components/Alerts";
import ScannerTester from "./components/ScannerTester";
import MedicineScanner from "./components/MedicineScanner";

import { getUpcomingAlerts } from "./actions/AlertsActions";

class RouterComponent extends React.Component {
  renderSettingsButton() {
    return (
      <TouchableOpacity onPress={() => Actions.settings()}>
        <Image
          style={{ marginLeft: 10, height: 28, width: 28 }}
          source={require("./media/settings.png")}
        />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <Router>
        <Scene
          key="root"
          hideNavBar
          renderLeftButton={() => <View />}
          renderRightButton={() => <View />}
        >
          <Scene key="loading">
            <Scene hideNavBar key="app_start" component={LoadingAppStart} />
          </Scene>

          <Scene key="auth" type={ActionConst.RESET}>
            <Scene
              initial
              titleStyle={{ alignSelf: "center", color: "steelblue" }}
              key="login"
              component={LoginForm}
              title="Login"
            />
          </Scene>

          <Scene type={ActionConst.RESET}
            key="main"
          >
            <Scene
              key="home"
              titleStyle={{ alignSelf: "center", color: "steelblue" }}
              component={Home}
              title="MedScanRx Home"
              renderLeftButton={this.renderSettingsButton}
            />
            <Scene
              key="settings"
              titleStyle={{ alignSelf: "center", color: "steelblue" }}
              // Currently broken, will need to take a look at this more (back and title dont play together :(  )
              //titleStyle={{ alignSelf: "center" }}
              component={Settings}
              title="Settings"
              onBack={() => Actions.reset("main")}
              back={true}
            />
            <Scene
              key="medicines"
              titleStyle={{ alignSelf: "center", color: "steelblue" }}
              // Currently broken, will need to take a look at this more (back and title dont play together :(  )
              //titleStyle={{ alignSelf: "center" }}
              component={Medicines}
              title="All Medicines"
              back={true}
            />
            <Scene
              //Removed for now, but will think about if I want them or not ...
              // rightTitle=" Home"
              // onRight={() => Actions.main()}
              key="medicineDetail"
              titleStyle={{ alignSelf: "center", color: "steelblue" }}
              component={MedicineDetail}
              title="Medicine Details"
              back={true}
            /> 
            <Scene
              key="alerts"
              titleStyle={{ alignSelf: "center", color: "steelblue" }}
              component={Alerts}
              title="All Alerts"
              back={true}
            />
            <Scene
              key="scannerTester"
              title="Scanner Test"
              component={ScannerTester}
            />
            <Scene
              key="medicineScanner"
              title="Scanner"
              component={MedicineScanner}
            />
          </Scene>
        </Scene>
      </Router>
    );
  }
}

export default RouterComponent;
