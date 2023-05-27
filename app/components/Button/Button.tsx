import React, { FC, ReactNode } from "react";
import { Text, Pressable, PressableProps } from "react-native";
import { gStyles } from "../../../style";

interface ButtonProps extends PressableProps {
  color: "green" | "blue" | "red";
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({
  children,
  color,
  onPress,
  ...props
}) => {
  const getButtonColor = () => {
    switch (color) {
      case "green":
        return gStyles.buttonGreen;
      case "blue":
        return gStyles.buttonBlue;
      case "red":
        return gStyles.buttonRed;
      default:
        return gStyles.button;
    }
  };
  const getButtonColorText = () => {
    switch (color) {
      case "green":
        return gStyles.buttonGreenText;
      case "blue":
        return gStyles.buttonBlueText;
      case "red":
        return gStyles.buttonRedText;
      default:
        return null;
    }
  };
  return (
    <Pressable
      onPress={onPress}
      {...props}
      style={({ pressed }) => [
        gStyles.button,
        getButtonColor(),
        {
          backgroundColor: pressed ? "rgba(25, 118, 210, 0.05)" : "white",
        },
      ]}
    >
      <Text style={[getButtonColorText(), { fontFamily: "ArvoRegular" }]}>
        {children}
      </Text>
    </Pressable>
  );
};
