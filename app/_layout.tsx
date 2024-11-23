import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const HomeLayout = () => {
    return (
        <Stack
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="index" options={{headerShown: false}} />
            <Stack.Screen name="cart" options={{}} />
        </Stack>
    )
}

export default HomeLayout

const styles = StyleSheet.create({})