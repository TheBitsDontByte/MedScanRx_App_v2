import React, { Component } from "react";
import { View, Text, Switch, Keyboard } from "react-native";
import { connect } from "react-redux";

import { Card, CardItem, Input, Button, Header, AsyncSpinner } from "./common";
import {
  emailChanged,
  passwordChanged,
  loginUser,
  loggingIn
} from "../actions";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      errorMessage: null,
      stayLoggedIn: true
    };
  }
  componentWillReceiveProps(newProps) {
    if (newProps) {
      this.setState({ errorMessage: newProps.errorMessage });
    }
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onLoginPress() {
    Keyboard.dismiss();
    this.props.loggingIn();
    const { email, password } = this.props;

    this.props.loginUser({
      email,
      password,
      stayLoggedIn: this.state.stayLoggedIn
    });
  }

  renderError() {
    if (this.state.errorMessage) {
      return (
        <View style={styles.errorContainer}>
          <Text style={styles.errorTextStyle}>{this.props.errorMessage}</Text>
        </View>
      );
    }
  }

  renderButton() {
    if (this.props.loading) {
      return (
        <View style={styles.spinnerContainer}>
          <AsyncSpinner />
        </View>
      );
    }
    return <Button onPress={this.onLoginPress.bind(this)}>Login</Button>;
  }

  onStayLoggedInChange() {
    this.setState({ stayLoggedIn: !this.state.stayLoggedIn });
  }

  render() {
    console.log("Render props", this.props, this.state);
    return (
      <View style={styles.containerStyle}>
        <Card>
          <CardItem>
            <Input
              onChangeText={this.onEmailChange.bind(this)}
              label="Email:"
              placeholder="my.email@gmail.com"
              value={this.props.email}
            />
          </CardItem>
          <CardItem>
            <Input
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
              secureTextEntry
              label="Password:"
              placeholder="password"
            />
          </CardItem>
          <CardItem>
            <Text style={styles.labelStyle}>Stay signed in: </Text>
            <Switch
              value={this.state.stayLoggedIn}
              onValueChange={this.onStayLoggedInChange.bind(this)}
            />
          </CardItem>
          {this.state.errorMessage && this.renderError()}
          <CardItem>{this.renderButton()}</CardItem>
        </Card>
      </View>
    );
  }
}

const styles = {
  errorContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  spinnerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  },
  containerStyle: {
    backgroundColor: "#c1e8ff",
    flex: 1,
    paddingTop: 50
  },
  labelStyle: {
    color: "blue",
    fontSize: 18,
    paddingLeft: 20,
    paddingBottom: 5
  }
};

const mapStateToProps = (state, ownProps) => {
  console.log("mstp", state);

  return {
    email: state.auth.email,
    password: state.auth.password,
    errorMessage: state.auth.errorMessage,
    loading: state.auth.loading
  };
};

export default connect(
  mapStateToProps,
  {
    emailChanged,
    passwordChanged,
    loginUser,
    loggingIn
  }
)(LoginForm);
