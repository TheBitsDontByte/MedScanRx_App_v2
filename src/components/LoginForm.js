import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

import { Card, CardItem, Input, Button, Header, AsyncSpinner } from "./common";
import { emailChanged, passwordChanged, loginUser } from "../actions";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = { error: null };
  }
  componentWillReceiveProps() {
    if (this.props.error) {
      this.setState({ error: this.props.error });
    }
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onLoginPress() {
    this.setState({ error: null });
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  renderError() {
    if (this.state.error) {
      return (
        <View style={{ backgroundColor: "white" }}>
          <Text style={styles.errorTextStyle}>{this.props.error}</Text>
        </View>
      );
    }
  }

  renderButton() {
    if (this.props.loading) {
      return <AsyncSpinner />;
    }

    return <Button onPress={this.onLoginPress.bind(this)}>Login</Button>;
  }

  render() {
    console.log("state", this.state);
    return (
      <View style={styles.containerStyle}>
        <Card>
          <CardItem>
            <Input
              onChangeText={this.onEmailChange.bind(this)}
              label="Email"
              placeholder="my.email@gmail.com"
              value={this.props.email}
            />
          </CardItem>
          <CardItem>
            <Input
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
              secureTextEntry
              label="Password"
              placeholder="password"
            />
          </CardItem>
          {this.state.error && this.renderError.bind(this)}
          <CardItem>{this.renderButton()}</CardItem>
        </Card>
      </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  },
  containerStyle: {
    backgroundColor: "#c1e8ff",
    flex: 1,
    paddingTop: 50
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  };
};

export default connect(
  mapStateToProps,
  {
    emailChanged,
    passwordChanged,
    loginUser
  }
)(LoginForm);
