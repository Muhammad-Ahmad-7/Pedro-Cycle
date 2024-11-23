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
import Icon from "react-native-vector-icons/Ionicons";
const cycle = require("../../assets/images/onboarding2.png");
// import { router } from "expo-router";
const categories = [
  {
    id: "1",
    title: "Cycles",
    image:
      "https://plus.unsplash.com/premium_photo-1678718713393-2b88cde9605b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    title: "Tools",
    image:
      "https://plus.unsplash.com/premium_photo-1678718713393-2b88cde9605b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    title: "Accessories",
    image: require("../"),
  },
  {
    id: "4",
    title: "Apparel",
    image: require("../../assets/images/cyc.jpg"),
  },
];

const Categories = () => {
  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => console.log("helo")}
    >
      {/* <Pressable onPress={() => }></Pressable> */}
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
          style={[styles.searchInput, { borderWidth: 0 }]} // Make sure to remove any border styling on focus
          placeholder="Search"
          placeholderTextColor="#666"
          //   onFocus={(e) => (e.target.style.outline = "none")} // Optional: for web, prevents focus outline
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
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBackground,
    padding: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
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
    // flex: 1,
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    color: colors.white,
    padding: 5,
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    // flex: 1,
    // backgroundColor: "blue",
    fontWeight: "bold",

    color: colors.white,

    // marginBottom: 20,
  },
  categoriesList: {
    paddingBottom: 16,
  },
  categoryItem: {
    marginBottom: 16,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: colors.lightBackground,
  },
  categoryContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 100,
    // padding: 16,
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
    // borderRadius: 8,
    // padding: 16,
    overflow: "hidden",
  },
  categoryImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default Categories;
