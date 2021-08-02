import React from "react";
import { TouchableOpacity, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { images, COLORS, FONTS } from "../constants";

const CustomButton = ({
  buttonText,
  colors,
  buttomContainerStyle,

  onPress,
}) => {
  if (colors.length > 0) {
    return (
      <TouchableOpacity onPress={onPress}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={colors}
          style={{
            ...buttomContainerStyle,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: COLORS.white,
              ...FONTS.h3,
            }}
          >
            {buttonText}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          ...buttomContainerStyle,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: COLORS.lightGreen,
            ...FONTS.h3,
          }}
        >
          {buttonText}
        </Text>
      </TouchableOpacity>
    );
  }
};

export default CustomButton;
