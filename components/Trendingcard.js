import { BlurView } from "@react-native-community/blur";
import React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  Platform,
  StyleSheet,
} from "react-native";
const RecipieCardInfo = ({ recipeItem }) => {
  if (Platform.OS === "ios") {
    return (
      <BlurView blurType="dark" style={styles.RecipieCardContainer}></BlurView>
    );
  } else {
    return (
      <View
        style={{
          ...styles.RecipieCardInfo,
          backgroundColor: COLORS.transparentDarkGray,
        }}
      >
        <Text>SDSD</Text>
      </View>
    );
  }
};
import { SIZES, COLORS, FONTS, icons } from "../constants";
const TrendingCard = ({ containerStyle, recipeItem, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        height: 350,
        width: 250,
        marginTop: SIZES.radius,
        marginRight: 20,
        borderRadius: SIZES.radius,
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <Image
        source={recipeItem.image}
        resizeMode="cover"
        style={{
          width: 250,
          height: 350,
          borderRadius: SIZES.radius,
        }}
      />
      <View
        style={{
          position: "absolute",
          top: 20,
          left: 15,
          paddingHorizontal: SIZES.radius,
          paddingVertical: 5,
          backgroundColor: COLORS.transparentGray,
          borderRadius: SIZES.radius,
        }}
      >
        <Text style={{ color: COLORS.white, ...FONTS.h4 }}>
          {" "}
          {recipeItem.category}
        </Text>
      </View>
      <RecipieCardInfo recipeItem={recipeItem} />
    </TouchableOpacity>
  );
};
export default TrendingCard;

const styles = StyleSheet.create({
  RecipieCardContainer: {
    position: "absolute",
    bottom: 10,
    backgroundColor: "red",
    left: 10,
    right: 10,
    height: 100,
    paddingVertical: SIZES.radius,
    paddingHorizontal: SIZES.base,
    borderRadius: SIZES.radius,
  },
});
