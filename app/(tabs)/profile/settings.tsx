import colors from '@/constants/colors';
import { Stack } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Switch, ScrollView } from 'react-native';

const SettingScreen = () => {
    const [notificationsEnabledSales, setNotificationsEnabledSales] = useState(false);
    const [notificationsEnabledOrder, setNotificationsEnabledOrder] = useState(false);
    const [personalInfo, setPersonalInfo] = useState({
        fullName: '',
        dob: '',
        password: '',
    });

    const handleInputChange = (field: string, value: string) => {
        setPersonalInfo({
            ...personalInfo,
            [field]: value,
        });
    };

    const handleToggleChangeSales = () => {
        setNotificationsEnabledSales(previousState => !previousState);
    };
    const handleToggleChangeOrder = () => {
        setNotificationsEnabledOrder(previousState => !previousState);
    };

    return (
        <ScrollView style={styles.container}>
            <Stack.Screen
                options={{
                    title: 'Settings',
                    headerStyle: { backgroundColor: colors.darkBackground },
                    headerTintColor: '#fff',
                    headerTitleStyle: { fontWeight: 'bold' },
                    headerTitleAlign: 'center',
                }}
            />
            {/* Personal Information Section */}
            <View style={styles.sectionContainer}>
                <Text style={styles.heading}>Personal Information</Text>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Full Name</Text>
                    <TextInput
                        style={styles.input}
                        value={personalInfo.fullName}
                        onChangeText={(text) => handleInputChange('fullName', text)}
                        placeholder="john doe"
                    />
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Date of Birth</Text>
                    <TextInput
                        style={styles.input}
                        value={personalInfo.dob}
                        onChangeText={(text) => handleInputChange('dob', text)}
                        placeholder="12/12/2012"
                        keyboardType="numeric"
                    />
                </View>
            </View>

            {/* Password Section */}
            <View style={styles.sectionContainer}>
                <Text style={styles.heading}>Password</Text>
                <View style={styles.inputGroup}>
                    <TextInput
                        style={styles.input}
                        value={personalInfo.password}
                        onChangeText={(text) => handleInputChange('password', text)}
                        placeholder="********"
                        secureTextEntry
                    />
                </View>
            </View>

            {/* Notification Section */}
            <View style={styles.sectionContainer}>
                <Text style={styles.heading}>Notification</Text>
                <View style={[styles.inputGroup, styles.notification]}>
                    <Text style={styles.label}>Sales</Text>
                    <Switch
                        value={notificationsEnabledSales}
                        onValueChange={handleToggleChangeSales}
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={notificationsEnabledSales ? '#f5dd4b' : '#f4f3f4'}
                    />
                </View>
                <View style={[styles.inputGroup, styles.notification]}>
                    <Text style={styles.label}>Order Delivery</Text>
                    <Switch
                        value={notificationsEnabledOrder}
                        onValueChange={handleToggleChangeOrder}
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={notificationsEnabledOrder ? '#f5dd4b' : '#f4f3f4'}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkBackground,
        paddingTop: 80,
        paddingHorizontal: 15,
    },
    sectionContainer: {
        marginBottom: 20,
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.lightGray,
        marginBottom: 10,
    },
    label: {
        fontSize: 14,
        fontWeight: '500',
        color: colors.lightGray,
        marginBottom: 5,
    },
    inputGroup: {
        marginBottom: 15,
    },
    input: {
        height: 80,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingLeft: 10,
        backgroundColor: colors.lightBackground,
        fontSize: 20,
    },
    notification: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    }
});

export default SettingScreen;
