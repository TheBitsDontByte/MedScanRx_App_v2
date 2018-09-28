import React from "react";
import { Button, CardItem } from "./common";
import { logoutUser } from "../actions/AuthActions";
import { connect } from "react-redux";

class LogoutButton extends React.Component {
  onLogoutPress() {
    this.props.logoutUser();
  }

  render() {
    return (
      <CardItem>
        <Button onPress={this.onLogoutPress.bind(this)}>Logout</Button>
      </CardItem>
    );
  }
}

export default connect(
  null,
  { logoutUser }
)(LogoutButton);
