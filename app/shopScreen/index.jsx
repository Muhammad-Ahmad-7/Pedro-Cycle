import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Categories from "./Categories";
import Tools from "./Tools";
function ShopScreen() {
  return (
    <>
      <View style={{ flex: 1 }}>
        {/* <Text>shopScreen</Text> */}
        {/* 1)<Categories /> */}
        <Tools />
      </View>
    </>
  );
}
export default ShopScreen;
const styles = StyleSheet.create({});
