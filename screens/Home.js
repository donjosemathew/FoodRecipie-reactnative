import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
  StatusBar,
  FlatList,
} from "react-native";
import { CategoryCard, TrendingCard } from "../components";

import { FONTS, COLORS, SIZES, icons, images, dummyData } from "../constants";
const Home = ({ navigation }) => {
  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: SIZES.padding,
          alignItems: "center",
          height: 80,
        }}
      >
        <View
          stytle={{
            flex: 1,
          }}
        >
          <Text
            style={{
              color: COLORS.darkGreen,
              ...FONTS.h2,
            }}
          >
            Hello Don
          </Text>
          <Text
            style={{
              marginTop: 3,
              color: COLORS.gray,
              ...FONTS.body3,
            }}
          >
            What you want to cook today?
          </Text>
        </View>
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 5,
            right: 5,
          }}
        >
          <Image
            source={images.profile}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
  function renderSearchbar() {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 50,
          alignItems: "center",
          marginLeft: SIZES.padding,
          marginRight: SIZES.padding,
          paddingHorizontal: SIZES.radius,
          borderRadius: 10,
          backgroundColor: COLORS.lightGray,
        }}
      >
        <Image
          source={icons.search}
          style={{
            width: 20,
            height: 20,
            tintColor: COLORS.gray,
          }}
        />
        <TextInput
          placeholder="Search Recipies"
          placeholderTextColor={COLORS.gray}
          style={{
            width: "100%",
            marginLeft: SIZES.radius,
            ...FONTS.body3,
          }}
        />
      </View>
    );
  }
  function renderSeeRecipeCard() {
    return (
      <View
        style={{
          flexDirection: "row",
          marginTop: SIZES.padding,
          marginRight: SIZES.padding,
          marginLeft: SIZES.padding,
          borderRadius: 10,
          backgroundColor: COLORS.lightGreen,
        }}
      >
        <View
          style={{
            flex: 1,
            width: 100,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={images.recipe}
            style={{
              width: 80,
              height: 80,
            }}
          />
          <View
            style={{
              flex: 1,
              paddingVertical: SIZES.radius,
            }}
          >
            <Text
              style={{
                width: "70%",
                color: COLORS.black,
                ...FONTS.body4,
              }}
            >
              You have 12 recipies that you haven't tried yet
            </Text>
            <TouchableOpacity style={{ marginTop: 10 }}>
              <Text
                style={{
                  color: COLORS.darkGreen,
                  textDecorationLine: "underline",
                  ...FONTS.h4,
                }}
              >
                See Recipies
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  function renderTrendingSection() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          marginLeft: 5,
        }}
      >
        <Text
          style={{
            marginHorizontal: SIZES.padding,
            ...FONTS.h2,
          }}
        >
          Trending Recipe
        </Text>
        <FlatList
          data={dummyData.trendingRecipes}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item, index }) => {
            return <TrendingCard recipeItem={item} />;
          }}
        />
      </View>
    );
  }
  return (
    <SafeAreaView
      showsVerticalScrollIndicator={true}
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        //paddingTop: StatusBar.currentHeight,
      }}
    >
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      {renderHeader()}
      {renderSearchbar()}
      {renderSeeRecipeCard()}
      {renderTrendingSection()}
      <FlatList
        data={dummyData.categories}
        keyExtractor={(item) => `${item.id}`}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<View></View>}
        renderItem={({ item }) => {
          return (
            <CategoryCard
              containerStyle={{
                marinHorizontal: SIZES.padding,
              }}
              categoryItem={item}
              onPress={() => {
                navigation.navigate("Recipe", { recipe: item });
              }}
            />
          );
        }}
        ListFooterComponent={
          <View
            style={{
              marginBottom: 100,
            }}
          ></View>
        }
      />
    </SafeAreaView>
  );
};

export default Home;
