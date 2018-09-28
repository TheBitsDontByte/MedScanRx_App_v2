import React from "react";
import { View, ActivityIndicator } from "react-native";

const AsyncSpinner = ({ size, spinnerStyle }) => {
  return (
    <View style={spinnerStyle}>
      <ActivityIndicator  size={size || "large"} />
    </View>
  );
};

export { AsyncSpinner };
