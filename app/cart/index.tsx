import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { router, Stack } from 'expo-router';
import colors from '@/constants/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import CartCard from './components/CartCard';
import Button from '@/components/Button';

const cartData = [
  {
    id: '1',
    name: 'Wireless Headphones',
    price: 99.99,
    quantity: 1,
    image: 'https://via.placeholder.com/80?text=Headphones',
  },
  {
    id: '2',
    name: 'Bluetooth Speaker',
    price: 49.99,
    quantity: 2,
    image: 'https://via.placeholder.com/80?text=Speaker',
  },
  {
    id: '3',
    name: 'Smart Watch',
    price: 199.99,
    quantity: 1,
    image: 'https://via.placeholder.com/80?text=SmartWatch',
  },
  {
    id: '4',
    name: 'Running Shoes',
    price: 59.99,
    quantity: 3,
    image: 'https://via.placeholder.com/80?text=Shoes',
  },
  {
    id: '5',
    name: 'Backpack',
    price: 39.99,
    quantity: 1,
    image: 'https://via.placeholder.com/80?text=Backpack',
  },
  {
    id: '6',
    name: 'Backpack',
    price: 39.99,
    quantity: 1,
    image: 'https://via.placeholder.com/80?text=Backpack',
  },
];

const MyCartScreen = () => {
  // State for managing the cart items
  const [cartItems, setCartItems] = useState(cartData);

  // Function to update quantity
  const handleQuantityChange = (id: string, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Calculate total amount
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          title: 'My Bag',
          headerStyle: { backgroundColor: colors.darkBackground },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          headerTitleAlign: 'center',
        }}
      />

      {/* Cart Items */}
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CartCard product={item} onQuantityChange={handleQuantityChange} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />

      {/* Footer Section for Total Amount and Checkout */}
      <View style={styles.footer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total Amount:</Text>
          <Text style={styles.totalValue}>${totalAmount.toFixed(2)}</Text>
        </View>
        <TouchableOpacity onPress={() => router.push('/cart/checkout')} style={styles.checkoutButton}>
          <Button title="Checkout" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBackground,
    padding: 10,
  },
  listContent: {
    paddingBottom: 100, // To ensure the footer is not overlapped
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.lightBackground,
    padding: 16,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
  },
  totalValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
  },
  checkoutButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyCartScreen;
