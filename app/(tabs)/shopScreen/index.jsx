import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import Categories from "./Categories";
function ShopScreen() {
  return (
    <>
      <View style={{ flex: 1 }}>
        {/* <Text>shopScreen</Text> */}
        <StatusBar barStyle="light-content" backgroundColor="#000" />

        <Categories />
        {/* <Tools /> */}
      </View>
    </>
  );
}
export default ShopScreen;
const styles = StyleSheet.create({});