import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import EmptyScreen from "@/components/EmptyScreen";
import Button from "@/components/Button";
import { router } from "expo-router";
import colors from "@/constants/colors";
// import ShopScreem from "./shopScreen";
// import ShopScreen from "./(tabs)/shopScreen";
const Category = () => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.darkBackground }}>
      {/* <TouchableOpacity onPress={() => router.push("/cart")}>
        <Button title="Go to Cart" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/profile")}>
        <Button title="Go to Profile" />
      </TouchableOpacity> */}
      {/* <ShopScreen /> */}
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({});
