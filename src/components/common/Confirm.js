import React from "react";
import { Text, View, Modal } from "react-native";
import { CardItem } from "./CardItem";
import { Button } from "./Button";

const Confirm = ({ children, onAccept, onDecline, visible }) => {
  const { cardItemStyle, containerStyle, textStyle } = styles;

  return (
    <Modal
      visible={visible}
      transparent={false}
      animationType="fade"
      onRequestClose={() => {}}
    >
      <CardItem style={containerStyle}>
        <CardItem style={cardItemStyle}>
          <Text style={textStyle}>{children}</Text>
        </CardItem>

        <CardItem>
          <Button onPress={onAccept}>Yes</Button>
          <Button onPress={onDecline}>No</Button>
        </CardItem>
      </CardItem> 
    </Modal>
  );
};

const styles = {
  cardItemStyle: {
    justifyContent: "center"
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: "center",
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    position: "relative",
    flex: 1,
    justifyContent: "center"
  }
};

export { Confirm };
