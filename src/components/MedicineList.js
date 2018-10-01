import React, { Component } from "react";
import { FlatList, View } from "react-native";
import { connect } from "react-redux";
import moment from "moment";

import {
  getAllPrescriptionInfo,
  clearMedicineValues
} from "../actions/medicinesActions";
import MedicineListDetail from "./MedicineListDetail";
import LoadingAsync from "./LoadingAsync";
import { Button } from "./common";
import TakeMedicineModal from "./TakeMedicineModal";

class MedicineList extends Component {
  constructor() {
    super();

    this.state = { showModal: false };

    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  componentDidMount() {
    this.props.clearMedicineValues();
    this.props.getAllPrescriptionInfo(this.props.patientId);
  }

  componentWillUnmount() {
    this.setState({ showModal: false });
  }

  sortMedicines(medicines) {
    return medicines.sort((a, b) => {
      return a.prescriptionName > b.prescriptionName;
    });
  }

  hasUpcomingAlert(alert) {
    return moment().isAfter(moment.utc(alert).add(-20, "m")) && moment().isBefore(moment.utc(alert).add(35, "m")) 
  }

  renderRow(medicine) {
    return <MedicineListDetail medicine={medicine.item} />;
  }

  renderTakeNowButton() {
    let upcomingAlert = false;
    this.props.allMedicines.forEach(element => {
      if (this.hasUpcomingAlert(element.nextAlert))
        upcomingAlert = true;
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

  render() {
    let { allMedicines } = this.props;

    if (!allMedicines) return <LoadingAsync />;

    return (
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
            data={this.sortMedicines(allMedicines)}
            renderItem={this.renderRow}
            keyExtractor={medicine => medicine.ndc}
          />
        </View>
      </View>
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
    allMedicines: state.medicines.allMedicines,
    patientId: state.auth.patientId
  };
};

export default connect(
  mapStateToProps,
  { getAllPrescriptionInfo, clearMedicineValues }
)(MedicineList);
