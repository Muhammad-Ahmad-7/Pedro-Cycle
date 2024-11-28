import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useWishlist } from "./WishListContext"; // Import the context hook
import colors from "@/constants/colors"; // Assuming you have a color constants file
import EmptyScreen from "../../../components/EmptyScreen";

const WishlistScreen = () => {
  const { wishlist, toggleWishlist } = useWishlist(); // Get wishlist data and toggle function
  console.log(wishlist);

  // Check if wishlist is empty and display EmptyScreen
  if (wishlist.length === 0) {
    return <EmptyScreen />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Wishlist</Text>
      <FlatList
        data={wishlist}
        keyExtractor={(item, index) => item.id || index.toString()} // Fallback to index if `id` is missing
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>{item.currentPrice}</Text>
            <TouchableOpacity onPress={() => toggleWishlist(item)}>
              <Text style={styles.removeButton}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.darkBackground,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.white,
    marginBottom: 16,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightBackground,
    backgroundColor: colors.darkBackground,
    borderRadius: 8,
    overflow: "hidden",
    elevation: 3,
    shadowColor: colors.black,
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  itemName: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "600",
    flex: 1,
  },
  itemPrice: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
  removeButton: {
    color: colors.error,
    fontWeight: "bold",
    fontSize: 14,
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: colors.lightBackground,
    borderRadius: 4,
  },
});

export default WishlistScreen;
