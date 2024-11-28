import { StyleSheet, Text, View, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import colors from '@/constants/colors';

const deliveredOrders = [
    {
        orderNo: 'ORD12345',
        trackingNo: 'TRK98765',
        quantity: 3,
        totalAmount: 150.0,
    },
    {
        orderNo: 'ORD12346',
        trackingNo: 'TRK98766',
        quantity: 2,
        totalAmount: 100.0,
    },
    {
        orderNo: 'ORD12347',
        trackingNo: 'TRK98767',
        quantity: 5,
        totalAmount: 250.0,
    },
];

const processingOrders = [
    {
        orderNo: "ORD22345",
        trackingNo: "TRK28765",
        quantity: 4,
        totalAmount: 200.0
    },
    {
        orderNo: "ORD22346",
        trackingNo: "TRK28766",
        quantity: 1,
        totalAmount: 50.0
    },
    {
        orderNo: "ORD22347",
        trackingNo: "TRK28767",
        quantity: 2,
        totalAmount: 120.0
    }
];

const cancelledOrders = [
    {
        orderNo: "ORD32345",
        trackingNo: "TRK38765",
        quantity: 3,
        totalAmount: 75.0
    },
    {
        orderNo: "ORD32346",
        trackingNo: "TRK38766",
        quantity: 2,
        totalAmount: 90.0
    },
    {
        orderNo: "ORD32347",
        trackingNo: "TRK38767",
        quantity: 6,
        totalAmount: 180.0
    }
];

const OrderScreen = () => {
    const [selectedStatus, setSelectedStatus] = useState<string>('Delivered'); // Default selected status
    const [data, setData] = useState(deliveredOrders);
    const [loading, setLoading] = useState(false);

    const renderOrderItem = ({ item }: any) => (
        <View style={styles.orderCard}>
            <Text style={styles.orderTitle}>Order No: {item.orderNo}</Text>
            <Text style={styles.orderDetail}>Tracking No: {item.trackingNo}</Text>
            <Text style={styles.orderDetail}>Quantity: {item.quantity}</Text>
            <Text style={styles.orderTotal}>Total Amount: ${item.totalAmount.toFixed(2)}</Text>
            <TouchableOpacity style={{borderWidth: 1, borderColor: colors.lightGray, width: 100, paddingVertical: 15, borderRadius:10, marginTop: 5}}>
                <Text style={{color: 'white', textAlign: 'center'}}>
                    Details
                </Text>
            </TouchableOpacity>
        </View>
    );

    const handleStatusClick = (status: string) => {
        setSelectedStatus(status); // Update the selected status
        setLoading(true); // Show the activity indicator

        // Simulate loading delay
        setTimeout(() => {
            if (status === 'Delivered') {
                setData(deliveredOrders);
            } else if (status === 'Processing') {
                setData(processingOrders);
            } else if (status === 'Cancelled') {
                setData(cancelledOrders);
            }
            setLoading(false); // Hide the activity indicator
        }, 2000); // 2-second delay
    };

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen
                options={{
                    title: 'My Orders',
                    headerStyle: { backgroundColor: colors.darkBackground },
                    headerTintColor: '#fff',
                    headerTitleStyle: { fontWeight: 'bold' },
                    headerTitleAlign: 'center',
                }}
            />

            <View style={styles.statusContainer}>
                {['Delivered', 'Processing', 'Cancelled'].map((status) => (
                    <TouchableOpacity
                        key={status}
                        onPress={() => handleStatusClick(status)}
                        style={[
                            styles.statusButton,
                            selectedStatus === status && styles.selectedStatusButton,
                        ]}
                    >
                        <Text style={[styles.statusText, selectedStatus === status && styles.selectedStatusText]}>{status}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {loading ? (
                // Show ActivityIndicator when loading
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color={colors.lightGray} />
                    <Text style={styles.loadingText}>Loading orders...</Text>
                </View>
            ) : (
                // Show FlatList when not loading
                <FlatList
                    data={data}
                    renderItem={renderOrderItem}
                    keyExtractor={(item) => item.orderNo}
                    contentContainerStyle={styles.orderList}
                />
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkBackground,
        padding: 10,
        paddingTop: 40,
    },
    orderList: {
        paddingBottom: 20,
    },
    orderCard: {
        backgroundColor: colors.lightBackground,
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
    },
    orderTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.white,
        marginBottom: 5,
    },
    orderDetail: {
        fontSize: 14,
        color: colors.lightGray,
        marginBottom: 5,
    },
    orderTotal: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.lightGray,
        marginTop: 10,
    },
    statusContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
        marginTop: 10,
    },
    statusButton: {
        backgroundColor: colors.darkBackground,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginHorizontal: 5,
    },
    selectedStatusButton: {
        backgroundColor: 'white',
    },
    statusText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.lightGray,
    },
    selectedStatusText: {
        color: colors.darkBackground,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: colors.lightGray,
    },
});

export default OrderScreen;
