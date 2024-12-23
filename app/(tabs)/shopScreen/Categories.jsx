import colors from "@/constants/colors";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
} from "react-native";
import { Router } from "expo-router/build/Route";
import Icon from "react-native-vector-icons/Ionicons";
import { router } from "expo-router";
const cycle = require("../../../assets/images/onboarding2.png");

const categories = [
  {
    id: "1",
    title: "Cycles",
  },
  {
    id: "2",
    title: "Tools",
  },
  {
    id: "3",
    title: "Accessories",
  },
  {
    id: "4",
    title: "Apparel",
  },
];

const Categories = () => {
  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => router.push("/shopScreen/Tools")}
    >
      <View style={styles.categoryContent}>
        <Text style={styles.categoryTitle}>{item.title}</Text>
        <View style={styles.imageContainer}>
          <Image source={cycle} style={styles.categoryImage} />
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#999" style={styles.icon} />
        <TextInput
          style={[styles.searchInput, { borderWidth: 0 }]}
          placeholder="Search"
          placeholderTextColor="#666"
        />
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Categories</Text>
      </View>
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.categoriesList}
        style={styles.flatListStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBackground,
  },
  flatListStyle: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 16,
    borderRadius: 10,
    backgroundColor: colors.lightBackground,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    borderRadius: 8,
    padding: 12,
    color: colors.white,
    fontSize: 16,
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.white,
  },
  categoriesList: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  categoryItem: {
    marginBottom: 16,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: colors.lightBackground,
    flex: 1,
  },
  categoryContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 100,
  },
  categoryTitle: {
    padding: 16,
    flex: 45,
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  imageContainer: {
    flex: 55,
    width: 100,
    height: 100,
    overflow: "hidden",
  },
  categoryImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default Categories;

