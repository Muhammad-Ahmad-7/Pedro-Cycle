import { Tabs } from "expo-router";
import { WishlistProvider } from "../(tabs)/wishLish/WishListContext"; // Adjust path if necessary
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

export default function TabsLayout() {
  return (
    <WishlistProvider>
      <Tabs
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: styles.tabBar,
          tabBarActiveTintColor: "#f95f2e", // Active icon color
          tabBarInactiveTintColor: "#757575", // Inactive icon color
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            // Assign icons based on the route name
            if (route.name === "index") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "shopScreen") {
              iconName = focused ? "basket" : "basket-outline";
            } else if (route.name === "cart") {
              iconName = focused ? "cart" : "cart-outline";
            } else if (route.name === "profile") {
              iconName = focused ? "person" : "person-outline";
            } else if (route.name === "wishLish/index") {
              iconName = focused ? "heart" : "heart-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tabs.Screen
          name="index"
          options={{ href: null, tabBarLabel: "Home" }}
        />
        <Tabs.Screen
          name="shopScreen"
          options={{ tabBarLabel: "Shop" }}
        />
        <Tabs.Screen
          name="cart"
          options={{ tabBarLabel: "Cart" }}
        />
        <Tabs.Screen
          name="profile"
          options={{ tabBarLabel: "Profile" }}
        />
        <Tabs.Screen
          name="wishLish/index"
          options={{ tabBarLabel: "WishList" }}
        />
      </Tabs>
    </WishlistProvider>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#1e1f28", // Tab bar background color
    borderTopWidth: 0.5,
    borderTopColor: "#2a2c36", // Light border
    height: 60,
    paddingBottom: 10,
    paddingTop: 5,
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: "600",
  },
});
