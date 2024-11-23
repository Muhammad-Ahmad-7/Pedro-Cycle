import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import colors from "../../../constants/colors";
import Icon from "react-native-vector-icons/AntDesign";
export default function Heart({ onPress }) {
  const [show, setShow] = useState(false);
  function handlePress() {
    setShow((show) => !show);
  }
  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={{
          backgroundColor: colors.lightBackground,
          padding: 9,
          borderRadius: "50%",
        }}
      >
        {show ? (
          <Icon name="hearto" size={18} color={colors.lightGray} />
        ) : (
          <Icon name="heart" size={18} color="red" />
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
