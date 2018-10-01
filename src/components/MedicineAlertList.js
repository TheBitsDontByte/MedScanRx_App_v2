import React, { Component } from "react";
import { View, ScrollView, Text, Image } from "react-native";
import { connect } from "react-redux";
import _ from "lodash";

import { getAllUpcomingAlerts } from "../actions/HomeActions";
import { Button } from "./common";
import MedicineAlertDetail from "./MedicineAlertDetail";
import TakeMedicineModal from "./TakeMedicineModal";
import LoadingAsync from "./LoadingAsync";
import Error from './Error'

class MedicineAlertList extends Component {
  constructor() {
    super();
    this.state = { showModal: false };

    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  showModal() {
    this.setState({
      showModal: true
    });
  }

  closeModal() {
    this.setState({
      showModal: false
    });
  }

  componentWillMount() {
    this.props.getAllUpcomingAlerts(this.props.patientId);

  }

  renderMedicines() {
    return _.map(this.props.allUpcomingAlerts, (val, key) => {
      return <MedicineAlertDetail key={val.ndc} medicine={val} />;
    });
  }

  renderTakeNowButton() {
    return this.props.allUpcomingAlerts.length > 0 ? (
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
    let { allUpcomingAlerts, patientId, hasError, errorMessage } = this.props;

    if (hasError) {
      return <Error errorMessage={errorMessage} />
    }

    if (!patientId || !allUpcomingAlerts)
      return (
        <View style={styles.centerStyle}>
          <LoadingAsync />
        </View>
      );
    

    return this.props.allUpcomingAlerts ? (
      <View style={{ flex: 1 }}>
        {this.state.showModal && (
          <TakeMedicineModal
            showModal={this.state.showModal}
            closeModal={this.closeModal}
          />
        )}
        <View style={styles.containerStyle}>{this.renderTakeNowButton()}</View>
        <View style={{ flex: 1 }}>
          <ScrollView>{this.renderMedicines()}</ScrollView>
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
  },
  centerStyle: {
    flex: 1,
    paddingBottom: 100,
    justifyContent: "center",
    alignItems: "center"
  }
};

const mapStateToProps = state => {
  console.log("Mstp, state", state);
  let newState = {};

  if (state.auth.patientId) {
    newState.patientId = state.auth.patientId;
  }

  if (state.home.allUpcomingAlerts) {
    newState.allUpcomingAlerts = state.home.allUpcomingAlerts;
  }

  if (state.home.homeError) {
    newState.hasError = state.home.homeError;
    newState.errorMessage = state.home.errorMessage;
  }

  return newState;
};

export default connect(
  mapStateToProps,
  { getAllUpcomingAlerts }
)(MedicineAlertList);
