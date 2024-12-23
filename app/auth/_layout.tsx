import { StyleSheet } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import colors from '@/constants/colors'
import { Ionicons } from '@expo/vector-icons'

const AuthLayout = () => {
    return (
        <Stack
            screenOptions={{
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: colors.darkBackground,
                },
                headerTintColor: colors.white,
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen
                name="signup"
                options={{
                    title: 'Sign Up',
                }}
            />
            <Stack.Screen
                name="signin"
                options={{
                    title: 'Sign In',
                }}
            />
        </Stack>
    )
}

export default AuthLayout

// const styles = StyleSheet.createElement({})

