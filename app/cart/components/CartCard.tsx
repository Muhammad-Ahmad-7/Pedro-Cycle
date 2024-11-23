import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '@/constants/colors';

const CartCard = ({ product, onQuantityChange }: any) => {
  const handleIncrement = () => {
    onQuantityChange(product.id, product.quantity + 1);
  };

  const handleDecrement = () => {
    if (product.quantity > 1) {
      onQuantityChange(product.id, product.quantity - 1);
    }
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>${(product.price * product.quantity).toFixed(2)}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={handleDecrement} style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{product.quantity}</Text>
          <TouchableOpacity onPress={handleIncrement} style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
    backgroundColor: colors.lightBackground,
    borderRadius: 8,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  info: {
    marginLeft: 10,
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
  },
  price: {
    fontSize: 14,
    color: colors.white,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  quantityText: {
    fontSize: 16,
    color: colors.white,
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: colors.lightGray,
    width: 40,
    height: 40,
    borderRadius: 20, // Circular button
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  buttonText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CartCard;
