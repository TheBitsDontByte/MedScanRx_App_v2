import React, { Component } from "react";
import { ListView, FlatList, View } from "react-native";
import { connect } from "react-redux";
import moment from "moment";

//Keep as alerts or get medicines ?
import {
  getAllUpcomingAlerts,
  clearAlertsValues
} from "../actions/AlertsActions";
import AlertListDetail from "./AlertListDetail";
import LoadingAsync from "./LoadingAsync";
import { Button } from "./common";
import TakeMedicineModal from "./TakeMedicineModal";

class AlertList extends Component {
  constructor() {
    super();
    this.state = { showModal: false };

    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  showModal() {
    console.log("Bout to show")
    this.setState({
      showModal: true
    });
  }

  closeModal() {
    this.setState({
      showModal: false
    });
  }

  refreshOnTake() {
    console.log("boi im refreshing");
  }

  componentWillMount() {
    this.props.getAllUpcomingAlerts(this.props.patientId);
  }

  componentWillUnmount() {
    this.props.clearAlertsValues();
  }

  sortAlerts(allAlerts) {
    return allAlerts.sort((a, b) => {
      return new Date(a.nextAlert) > new Date(b.nextAlert);
    });
  }

  renderRow(alert) {
    return <AlertListDetail alert={alert.item} />;
  }

  hasUpcomingAlert(alert) {
    return moment().isAfter(moment.utc(alert).add(-20, "m")) && moment().isBefore(moment.utc(alert).add(35, "m")) 
  }

  renderTakeNowButton() {
    let upcomingAlert = false;
    this.props.allAlerts.forEach(element => {
      if (this.hasUpcomingAlert(element.nextAlert)){
        upcomingAlert = true;
        return;
      }
    });

    return upcomingAlert ? (
      <Button
        onPress={this.showModal}
        newButtonStyle={{
          borderColor: "orange",
          backgroundColor: "steelblue",
          borderRadius: 100
        }}
        newTextStyle={{ color: "#dd770b" }}
      >
        Take Now !
      </Button>
    ) : null;
  }

  render() {
    let { allAlerts } = this.props;

    return allAlerts ? (
      <View style={{ flex: 1 }}>
        {this.state.showModal && (
          <TakeMedicineModal
            showModal={this.state.showModal}
            closeModal={this.closeModal}
          />
        )}
        <View style={styles.containerStyle}>{this.renderTakeNowButton()}</View>
        <View style={{ flex: 1 }}>
          <FlatList
            data={this.sortAlerts(allAlerts)}
            renderItem={this.renderRow}
            keyExtractor={alert => alert.ndc}
          />
        </View>
      </View>
    ) : (
      <LoadingAsync />
    );
  }
}

const styles = {
  containerStyle: {
    padding: 10,
    flexDirection: "row",
    position: "relative"
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    allAlerts: state.alerts.allUpcomingAlerts,
    patientId: state.auth.patientId
  };
};

export default connect(
  mapStateToProps,
  { getAllUpcomingAlerts, clearAlertsValues }
)(AlertList);
