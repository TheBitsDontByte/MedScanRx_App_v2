import React, { Component } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { connect } from "react-redux";
import _ from "lodash";

import { getAllUpcomingAlerts } from "../actions/HomeActions";
import { Button } from "./common";
import MedicineAlertDetail from "./MedicineAlertDetail";
import TakeMedicineModal from "./TakeMedicineModal";
import LoadingAsync from "./LoadingAsync";

class MedicineAlertList extends Component {
  constructor() {
    super();
    this.state = { showModal: false };

    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  componentWillMount() {
    this.props.getAllUpcomingAlerts(this.props.patientId);
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

  getUpcomingAlerts() {
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
    let { allUpcomingAlerts, patientId } = this.props;

    if (!patientId || !allUpcomingAlerts)
      return (
        <View style={styles.spinnerStyle}>
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
  spinnerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
};

const mapStateToProps = state => {
  return {
    allUpcomingAlerts: state.home.allUpcomingAlerts,
    patientId: state.auth.patientId
  };
};

export default connect(
  mapStateToProps,
  { getAllUpcomingAlerts }
)(MedicineAlertList);
