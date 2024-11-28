import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import colors from "../constants/colors";
import Entopy from "react-native-vector-icons/Entypo";
import Button from "./Button";
import { useNavigation } from "@react-navigation/native";
const EmptyScreen = () => {
  const navigation = useNavigation();
  return (
    <View
      style={[styles.mainContainer, { backgroundColor: colors.darkBackground }]}
    >
      {/* <Text></Text> */}
      <Entopy name="shopping-bag" color={colors.lightOrange} size={170} />
      <Text style={{ fontSize: 20, color: colors.lightOrange }}>
        Nothing here yet !
      </Text>

      <Text style={{ fontSize: 15, color: colors.lightOrange }}>
        But surely there is something you are {`\n`} wishing for and there is an
        easy fix.
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("shopScreen")}
        style={{ marginTop: 50 }}
      >
        <Button title={"EXPLORE"} />
      </TouchableOpacity>
    </View>
  );
};

export default EmptyScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
});
