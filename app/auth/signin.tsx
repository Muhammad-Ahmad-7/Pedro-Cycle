import colors from '@/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { router } from 'expo-router';
import { supabase } from '@/lib/supabase'; // Ensure you have set up Supabase configuration here

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSignIn = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        setLoading(true);
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        setLoading(false);

        // if (error) {
        //     Alert.alert('Sign In Failed', error.message);
        // } else {
        //     Alert.alert('Success', 'You are signed in');
        //     router.push('/'); // Adjust the route as per your app's structure
        // }
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                keyboardShouldPersistTaps="handled"
            >
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        placeholderTextColor="#666"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        placeholderTextColor="#666"
                    />
                    <TouchableOpacity
                        style={styles.forgotPasswordContainer}
                        // onPress={() => router.push('/auth/forgot-password')}
                    >
                        <Text style={styles.forgotPasswordText}>
                            Forgot your password?{' '}
                            <Ionicons
                                name="arrow-forward"
                                size={16}
                                color={colors.lightOrange}
                            />
                        </Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={handleSignIn}
                    disabled={loading}
                >
                    <Text style={styles.loginButtonText}>
                        {loading ? 'Logging In...' : 'LOGIN'}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.guestButton}>
                    <Text style={styles.guestButtonText}>Continue as Guest</Text>
                </TouchableOpacity>

                <Text style={styles.socialText}>Or sign up with social account</Text>
            </ScrollView>

            <View style={styles.socialButtonsContainer}>
                <TouchableOpacity style={styles.socialButton}>
                    <Icon name="google" size={24} color="#DB4437" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                    <Icon name="facebook" size={24} color="#4267B2" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                    <Icon name="apple" size={24} color="#000000" />
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

export default Signin;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkBackground,
    },
    scrollContent: {
        flexGrow: 1,
        padding: 20,
        paddingTop: 40,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20,
    },
    input: {
        backgroundColor: colors.lightBackground,
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 5,
        marginBottom: 10,
        fontSize: 16,
        borderWidth: 0,
        color: colors.white,
    },
    forgotPasswordContainer: {
        width: '100%',
        alignItems: 'flex-end',
        marginTop: 10,
    },
    forgotPasswordText: {
        color: colors.white,
        fontSize: 14,
    },
    loginButton: {
        backgroundColor: colors.lightOrange,
        padding: 15,
        borderRadius: 30,
        width: '100%',
        alignItems: 'center',
        marginVertical: 20,
    },
    loginButtonText: {
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold',
    },
    guestButton: {
        alignItems: 'center',
        marginVertical: 20,
    },
    guestButtonText: {
        color: colors.lightOrange,
        fontSize: 16,
        fontWeight: '500',
    },
    socialText: {
        color: colors.white,
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 14,
    },
    socialButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 40,
    },
    socialButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: colors.white,
    },
});
