// shopScreen layout with Stack Navigation
import { StyleSheet, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import colors from "../../../constants/colors";

const ScreenLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.darkBackground,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="Tools" options={{ title: "Tools" }} />
    </Stack>
  );
};

export default ScreenLayout;
