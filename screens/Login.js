import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { CustomButton } from "../components";

import { images, COLORS, SIZES, FONTS } from "../constants";
const Login = ({ navigation }) => {
  function renderHeader() {
    return (
      <View
        style={{
          height: SIZES.height > 700 ? "65%" : "60%",
        }}
      >
        <ImageBackground
          source={images.loginBackground}
          style={{
            flex: 1,
            justifyContent: "flex-end",
          }}
          resizeMode="cover"
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={[COLORS.transparent, COLORS.black]}
            style={{
              height: 200,
              justifyContent: "flex-end",
              paddingHorizontal: SIZES.padding,
            }}
          >
            <Text
              style={{
                width: "80%",
                color: COLORS.white,
                ...FONTS.largeTitle,
                lineHeight: 45,
              }}
            >
              Cooking a Delicious Food Easily
            </Text>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  }
  function renderDetail() {
    return (
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.padding,
        }}
      >
        <Text
          style={{
            marginTop: SIZES.radius,
            width: "70%",
            color: COLORS.gray,
            ...FONTS.body3,
          }}
        >
          Discover more than 1200 food recipies in your hands and Cooking it
          easily!
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          <CustomButton
            buttonText="Login"
            colors={[COLORS.darkGreen, COLORS.lime]}
            buttomContainerStyle={{
              paddingVertical: 18,
              borderRadius: 20,
            }}
            onPress={() => {
              navigation.replace("Home");
            }}
          />
          <CustomButton
            buttonText="SignUp17"
            colors={[]}
            buttomContainerStyle={{
              marginTop: SIZES.radius,
              paddingVertical: 18,
              borderRadius: 20,
              borderColor: COLORS.darkLime,
              borderWidth: 1,
            }}
            onPress={() => {
              navigation.replace("Home");
            }}
          />
        </View>
      </View>
    );
  }
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.black }}>
      <StatusBar translucent backgroundColor="transparent" />
      {renderHeader()}
      {renderDetail()}
    </View>
  );
};

export default Login;
