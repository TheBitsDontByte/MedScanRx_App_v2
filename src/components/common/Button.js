import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = ({ onPress, children, newButtonStyle, newTextStyle }) => {
  let { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyle, newButtonStyle]}>
      <Text style={[textStyle, newTextStyle]}>{children}</Text>
    </TouchableOpacity> 
  );
};

const styles = {
  textStyle: {
    alignSelf: "center",
    color: "steelblue",
    fontSize: 16,
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#e3edfc",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#007aff",
    marginLeft: 5,
    marginRight: 5
  }
};

//export default Button;
export { Button };
