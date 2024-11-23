import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, Stack } from 'expo-router';
import colors from '@/constants/colors';
import { useNavigation } from '@react-navigation/native'; // For navigation
import Feather from 'react-native-vector-icons/Feather'

const MyProfile = () => {
    const navigation = useNavigation();

    // Sample user data
    const user = {
        avatar: 'data:image/png;base64,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', // Replace with the actual avatar URL
        fullName: 'John Doe',
        email: 'johndoe@example.com',
    };

    // Navigate to the respective screens
    const navigateTo = (screen: string) => {
        // navigation.navigate(screen);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen
                options={{
                    title: 'My Profile',
                    headerStyle: { backgroundColor: colors.darkBackground },
                    headerTintColor: '#fff',
                    headerTitleStyle: { fontWeight: 'bold' },
                    headerTitleAlign: 'center',
                }}
            />

            {/* Avatar Section */}
            <View style={styles.avatarContainer}>
                <Image source={{ uri: user.avatar }} style={styles.avatar} />
                <View>
                    <Text style={styles.userName}>{user.fullName}</Text>
                    <Text style={styles.userEmail}>{user.email}</Text>
                </View>
            </View>

            {/* Cards Section */}
            <View style={styles.cardContainer}>
                <TouchableOpacity style={styles.card} onPress={() => router.push('/profile/order')}>
                    <Text style={styles.cardTitle}>Your Order</Text>
                    <Feather name='arrow-right' color={colors.lightGray} size={30}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.card} onPress={() => router.push('/cart/checkout')}>
                    <Text style={styles.cardTitle}>Shipping Address</Text>
                    <Feather name='arrow-right' color={colors.lightGray} size={30}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.card} onPress={() => router.push('/profile/settings')}>
                    <Text style={styles.cardTitle}>Settings</Text>
                    <Feather name='arrow-right' color={colors.lightGray} size={30}/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkBackground,
        padding: 20,
    },
    avatarContainer: {
        alignItems: 'center',
        marginBottom: 30,
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'space-around'
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.lightGray,
    },
    userEmail: {
        fontSize: 14,
        color: colors.lightGray,
    },
    cardContainer: {
        marginTop: 20,
    },
    card: {
        backgroundColor: colors.lightBackground,
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 8,
        marginBottom: 15,
        elevation: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
});

export default MyProfile;
