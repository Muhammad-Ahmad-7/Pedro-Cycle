import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import colors from '@/constants/colors'

const CartLayout = () => {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.darkBackground,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}>
            {/* Optionally configure static options outside the route.*/}
            <Stack.Screen name="index" options={{}} />
            <Stack.Screen name="checkout" options={{}} />
        </Stack>
    )
}

export default CartLayout

const styles = StyleSheet.create({})