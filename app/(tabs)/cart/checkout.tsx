import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import colors from "@/constants/colors";
import Button from "../../../components/Button";

const CheckoutScreen = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    contact: "",
    zipCode: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          title: "Add Shipping Address",
          headerStyle: { backgroundColor: colors.darkBackground },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
          headerTitleAlign: "center",
        }}
      />

      <ScrollView
        contentContainerStyle={styles.formContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.inputContainer}>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={styles.input}
            value={formData.firstName}
            onChangeText={(text) => handleInputChange("firstName", text)}
            placeholder="Enter your first name"
            placeholderTextColor={colors.lightGray}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Last Name</Text>
          <TextInput
            style={styles.input}
            value={formData.lastName}
            onChangeText={(text) => handleInputChange("lastName", text)}
            placeholder="Enter your last name"
            placeholderTextColor={colors.lightGray}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            value={formData.address}
            onChangeText={(text) => handleInputChange("address", text)}
            placeholder="Enter your address"
            placeholderTextColor={colors.lightGray}
            multiline
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Contact</Text>
          <TextInput
            style={styles.input}
            value={formData.contact}
            onChangeText={(text) => handleInputChange("contact", text)}
            placeholder="Enter your contact number"
            placeholderTextColor={colors.lightGray}
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Zip Code</Text>
          <TextInput
            style={styles.input}
            value={formData.zipCode}
            placeholderTextColor={colors.lightGray}
            onChangeText={(text) => handleInputChange("zipCode", text)}
            placeholder="50049"
            keyboardType="numeric"
          />
        </View>

        <TouchableOpacity>
          <Button title="Submit" />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBackground,
    paddingTop: 40,
  },
  formContainer: {
    padding: 20,
  },
  inputContainer: {
    backgroundColor: colors.lightBackground, // Background color for the input container
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: colors.lightBackground, // Border color for the container
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.lightGray,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: colors.lightGray,
    borderRadius: 8,
    paddingLeft: 10,
    color: "white",
  },
});

export default CheckoutScreen;
