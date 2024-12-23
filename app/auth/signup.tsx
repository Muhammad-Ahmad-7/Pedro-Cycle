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
    Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
import { supabase } from '@/lib/supabase';

const Signup = () => {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    async function signUpWithEmail() {
        if (!name || !email || !password) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        setLoading(true);

        try {
            const { data, error } = await supabase.auth.signUp({
                email: email,
                password: password,
            });

            if (error) throw error;

            if (data?.user) {
                const { error: profileError } = await supabase
                    .from('profiles')
                    .insert([
                        {
                            user_id: data.user.id,
                            username: name,
                            full_name: '',
                            avatar_url: '',
                            website: '',
                        },
                    ]);

                if (profileError) throw profileError;

                // Alert.alert('Success', 'Signed up successfully!', [
                //     {
                //         text: 'OK',
                //         onPress: () => router.replace('/(tabs)/shopScreen'),
                //     },
                // ]);
            }
        } catch (error:any) {
            Alert.alert('Error', error.message);
        } finally {
            setLoading(false);
        }
    }


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Sign Up</Text>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Name"
                        value={name}
                        onChangeText={setName}
                        placeholderTextColor="#666"
                    />
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
                </View>

                <View style={styles.loginLinkContainer}>
                    <TouchableOpacity onPress={() => router.push('/auth/signin')}>
                        <Text style={styles.loginLinkText}>
                            Already have an account? <Ionicons name="arrow-forward" size={16} color={colors.lightOrange} />
                        </Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={[styles.signupButton, loading && styles.disabledButton]}
                    onPress={signUpWithEmail}
                    disabled={loading}
                >
                    <Text style={styles.signupButtonText}>
                        {loading ? 'SIGNING UP...' : 'SIGN UP'}
                    </Text>
                </TouchableOpacity>

                <View style={styles.separatorContainer}>
                    <View style={styles.separator} />
                    <Text style={styles.separatorText}>OR</Text>
                    <View style={styles.separator} />
                </View>
                <View style={styles.socialButtonsContainer}>
                    <TouchableOpacity style={styles.socialButton}>
                        <Icon name="google" size={40} color="#DB4437" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton}>
                        <Icon name="facebook" size={40} color="#4267B2" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton}>
                        <Icon name="apple" size={40} color="#000" />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default Signup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkBackground,
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingBottom: 100,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: colors.white,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20,
    },
    input: {
        backgroundColor: colors.lightBackground,
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderRadius: 5,
        marginBottom: 10,
        fontSize: 16,
        borderWidth: 0,
        color: colors.white,
    },
    loginLinkContainer: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 20,
    },
    loginLinkText: {
        color: colors.white,
        fontSize: 14,
    },
    signupButton: {
        backgroundColor: colors.lightOrange,
        padding: 15,
        borderRadius: 30,
        width: '100%',
        alignItems: 'center',
    },
    signupButtonText: {
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold',
    },
    separatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        width: '100%',
    },
    separator: {
        flex: 1,
        height: 1,
        backgroundColor: colors.white,
    },
    separatorText: {
        marginHorizontal: 10,
        color: colors.white,
    },
    socialButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        marginTop: 40,
    },
    socialButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: colors.lightBackground,
    },
    disabledButton: {
        opacity: 0.7,
    },
});

