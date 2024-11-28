import { Tabs } from "expo-router";
import { WishlistProvider } from "../(tabs)/wishLish/WishListContext"; // Adjust path if necessary

export default function TabsLayout() {
  return (
    <WishlistProvider>
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen name="index" options={{ href: null }} />
        <Tabs.Screen name="shopScreen" />
        <Tabs.Screen name="cart" />
        <Tabs.Screen name="profile" />
      </Tabs>
    </WishlistProvider>
  );
}
