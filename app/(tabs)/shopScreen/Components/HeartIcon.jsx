import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import colors from "../../../../constants/colors";
import Icon from "react-native-vector-icons/AntDesign";

export default function Heart({ filled, onPress }) {
  return (
    <View>
      <View
        style={{
          backgroundColor: colors.lightBackground,
          padding: 9,
          borderRadius: 50, // Use number instead of string for borderRadius
        }}
      >
        {filled ? (
          <Icon name="heart" size={18} color="red" />
        ) : (
          <Icon name="hearto" size={18} color={colors.lightGray} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
