import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
  StatusBar,
  Modal,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import Heart from "./Components/HeartIcon";
import Icon from "react-native-vector-icons/AntDesign";
import Filter from "react-native-vector-icons/Ionicons";

import colors from "@/constants/colors";
import { useWishlist } from "../wishLish/WishListContext"; // Import Wishlist Context

// Sample data structure
const categories = [
  {
    id: "1",
    title: "Tools",
    products: [
      {
        id: "1",
        name: "Btwin Multitool",
        originalPrice: "60€",
        currentPrice: "45€",
        image: require("../../../assets/images/onboarding2.png"),
      },
      {
        id: "2",
        name: "Btwin F Grip",
        originalPrice: "40€",
        currentPrice: "30€",
        image: require("../../../assets/images/onboarding2.png"),
      },
      {
        id: "3",
        name: "O Stem",
        originalPrice: "70€",
        currentPrice: "60€",
        image: require("../../../assets/images/onboarding2.png"),
      },
      {
        id: "4",
        name: "11x28 Road Cassette",
        originalPrice: "75€",
        currentPrice: "60€",
        image: require("../../../assets/images/onboarding2.png"),
      },
      {
        id: "5",
        name: "XS 100 Toolkit",
        originalPrice: "25€",
        currentPrice: "18€",
        image: require("../../../assets/images/onboarding2.png"),
      },
      {
        id: "6",
        name: "Btwin R Wrench",
        originalPrice: "20€",
        currentPrice: "16€",
        image: require("../../../assets/images/onboarding2.png"),
      },
    ],
  },
  // Add other categories here
];

const SORT_OPTIONS = [
  { id: "popular", label: "Popular" },
  { id: "newest", label: "Newest" },
  { id: "customer_review", label: "Customer review" },
  { id: "price_low_high", label: "Price: lowest to high" },
  { id: "price_high_low", label: "Price: highest to low" },
];

const Tools = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showSortModal, setShowSortModal] = useState(false);
  const [selectedSort, setSelectedSort] = useState(null);

  const { wishlist, toggleWishlist } = useWishlist(); // Access wishlist and toggleWishlist function

  // Filter options
  const filterOptions = [
    "Keys",
    "Locks",
    "Inflators,",
    "Locks",
    "Inflators",
    "Locks",
    "Inflators",
  ];

  const sortProducts = (products) => {
    if (!selectedSort) return products;

    const sortedProducts = [...products];
    switch (selectedSort) {
      case "price_low_high":
        return sortedProducts.sort(
          (a, b) =>
            parseFloat(a.currentPrice.replace("€", "")) -
            parseFloat(b.currentPrice.replace("€", ""))
        );
      case "price_high_low":
        return sortedProducts.sort(
          (a, b) =>
            parseFloat(b.currentPrice.replace("€", "")) -
            parseFloat(a.currentPrice.replace("€", ""))
        );
      // Add other sorting logic here
      default:
        return products;
    }
  };

  const isItemInWishlist = (item) => {
    return wishlist.some((wishlistItem) => wishlistItem.id === item.id);
  };

  const SortModal = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showSortModal}
      onRequestClose={() => setShowSortModal(false)}
    >
      <TouchableWithoutFeedback onPress={() => setShowSortModal(false)}>
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Sort by</Text>
              </View>
              {SORT_OPTIONS.map((option) => (
                <TouchableOpacity
                  key={option.id}
                  style={[
                    styles.sortOption,
                    selectedSort === option.id && styles.selectedSortOption,
                  ]}
                  onPress={() => {
                    setSelectedSort(option.id);
                    setShowSortModal(false);
                  }}
                >
                  <Text
                    style={[
                      styles.sortOptionText,
                      selectedSort === option.id &&
                        styles.selectedSortOptionText,
                    ]}
                  >
                    {option.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );

  const renderMainScreen = () => (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        r
        style={[styles.filterContainer]}
      >
        {filterOptions.map((filter, index) => (
          <TouchableOpacity key={index} style={[styles.filterButton]}>
            <Text style={styles.filterText}>{filter}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View>
        <TouchableOpacity
          onPress={() => setShowSortModal(true)}
          style={[styles.sortContainer, { marginHorizontal: 10 }]}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Filter name="filter" color={colors.white} marginRight={8} />
            <Text style={styles.sortText}>Filters</Text>
          </View>
          <Text style={styles.sortText}>
            {selectedSort
              ? SORT_OPTIONS.find((opt) => opt.id === selectedSort)?.label
              : "Sort By"}
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.productGrid}>
        <View style={styles.gridContainer}>
          {sortProducts(categories[0].products).map((product) => (
            <TouchableOpacity
              key={product.id}
              style={styles.productItem}
              activeOpacity={0.7}
            >
              <Image
                // source={product.image}
                style={[styles.productImage, { backgroundColor: "white" }]}
              />
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{product.name}</Text>
                <Pressable
                  onPress={() => {
                    console.log("Heart pressed for product:", product);
                    toggleWishlist(product);
                  }}
                  style={{ position: "absolute", right: 0, top: -15 }}
                >
                  <Heart filled={isItemInWishlist(product)} />
                </Pressable>
                <View style={styles.priceContainer}>
                  <Text style={styles.originalPrice}>
                    {product.originalPrice}
                  </Text>

                  <Text style={styles.currentPrice}>
                    {product.currentPrice}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <SortModal />
    </View>
  );

  return renderMainScreen();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBackground,
    // backgroundColor: "green",
    padding: 8,
    paddingTop: StatusBar.currentHeight + 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1a1a1a",
    borderRadius: 25,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  searchIcon: {
    marginRight: 8,
    fontSize: 16,
  },
  searchInput: {
    flex: 1,
    padding: 12,
    color: "#fff",
    fontSize: 16,
  },
  filterContainer: {
    flexDirection: "row",
    marginBottom: 16,
    height: 42,
    paddingVertical: 6,
  },
  filterButton: {
    backgroundColor: "#fff",
    width: 90,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    // paddingBotto: 7,
    // height: "auto",

    borderRadius: 20,

    marginRight: 8,
  },
  filterText: {
    borderRadius: 20,
    // backgroundColor: "yellow",
    // color: color,
    fontWeight: "500",
  },
  sortContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sortText: {
    color: "#fff",
    fontSize: 14,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  productItem: {
    width: "48%",
    backgroundColor: colors.darkBackground,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.lightBackground,
    overflow: "hidden",
  },
  productImage: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
  },
  productInfo: {
    padding: 12,
  },
  productName: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  originalPrice: {
    color: "#666",
    fontSize: 14,
    textDecorationLine: "line-through",
    marginRight: 8,
  },
  currentPrice: {
    color: "#ff4444",
    fontSize: 16,
    fontWeight: "bold",
  },
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "#1a1a1a",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 20,
  },
  modalHeader: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  modalTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  sortOption: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  selectedSortOption: {
    backgroundColor: "#333",
  },
  sortOptionText: {
    color: "#fff",
    fontSize: 16,
  },
  selectedSortOptionText: {
    color: "#ff4444",
  },
});

export default Tools;
