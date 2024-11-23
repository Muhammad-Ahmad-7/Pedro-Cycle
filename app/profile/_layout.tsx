import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import colors from '@/constants/colors'

const ProfileLayout = () => {
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
            <Stack.Screen name="settings" options={{}} />
            <Stack.Screen name="order" options={{}} />
        </Stack>
  )
}

export default ProfileLayout

const styles = StyleSheet.create({})