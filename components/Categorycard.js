import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

const CategoryCard = ({ containerStyle, categoryItem, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
        marginTop: 10,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.gray2,
        ...containerStyle,
      }}
    >
      <Image
        source={categoryItem.image}
        style={{
          width: 100,
          height: 100,
          borderRadius: SIZES.radius,
        }}
      />
      <View
        style={{
          width: "65%",
          paddingHorizontal: 20,
        }}
      >
        <Text
          style={{
            flex: 1,
            ...FONTS.h2,
          }}
        >
          {categoryItem.name}
        </Text>
        <Text
          style={{
            color: COLORS.gray,
            ...FONTS.body4,
          }}
        >
          {categoryItem.duration} | {categoryItem.serving} serving
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
