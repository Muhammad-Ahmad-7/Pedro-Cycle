import React, { createContext, useContext, useState, useEffect } from "react";

// Create Context
const WishlistContext = createContext();

// Custom Hook to use Wishlist Context
export const useWishlist = () => useContext(WishlistContext);

// Provider Component
export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  // Add debugging console logs
  useEffect(() => {
    console.log("Current Wishlist:", wishlist);
  }, [wishlist]);

  const addToWishlist = (item) => {
    console.log("Attempting to add item:", item);
    setWishlist((prev) => {
      // Avoid duplicates and ensure complete item is added
      if (prev.some((product) => product.id === item.id)) {
        console.log("Item already in wishlist");
        return prev;
      }
      console.log("Item added to wishlist");
      return [...prev, { ...item }];
    });
  };

  const removeFromWishlist = (item) => {
    console.log("Attempting to remove item:", item);
    setWishlist((prev) => {
      const updatedList = prev.filter((product) => product.id !== item.id);
      console.log("Updated wishlist after removal:", updatedList);
      return updatedList;
    });
  };

  const toggleWishlist = (item) => {
    console.log("Toggling wishlist for item:", item);
    setWishlist((prev) => {
      if (prev.some((product) => product.id === item.id)) {
        // Remove if already in wishlist
        console.log("Removing item from wishlist");
        return prev.filter((product) => product.id !== item.id);
      }
      // Add if not in wishlist
      console.log("Adding item to wishlist");
      return [...prev, { ...item }];
    });
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist, toggleWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
