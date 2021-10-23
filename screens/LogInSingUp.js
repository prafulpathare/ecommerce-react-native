import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button, Image, StyleSheet, ImageBackground, TouchableOpacity, ScrollView, StatusBar, SafeAreaView, TextInput, Alert, AsyncStorage, Pressable } from 'react-native';
import MainScreen from './MainScreen';

const Stack = createStackNavigator();

const LogInScreen = ({ navigation, route }) => {
    const [phone, setPhone] = useState({ val: '', err: '' });
    const [password, setPassword] = useState({ val: '', err: '', wrongPasswordCount: 0 });

    useEffect(() => {

    }, []);

    const checkPhone = () => {
        if (phone.val.length != 10) {
            setPhone({ val: '', err: 'invalid phone no.' })
            return false;
        }
        return true;
    }
    const checkPassword = () => {
        if (password.val.length < 5) {
            setPassword({ val: password.val, err: 'password must be 5 letters long.', wrongPasswordCount: password.wrongPasswordCount })
            return false;
        }
        if(!(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/).test(password.val)) {
            setPassword({ val: password.val, err: 'password must contain at least one special character and number.', wrongPasswordCount: password.wrongPasswordCount })
            return false;
        }
        return true;
    }

    const handleLogIn = () => {
        setPhone({val: phone.val, err: ''})
        setPassword({val: password.val, err: '', wrongPasswordCount: password.wrongPasswordCount})
        if (!checkPhone()) return;
        if (!checkPassword()) return;

        navigation.navigate('Main');
    }

    return (
        <View style={styles.mainContainer}>

            <View style={styles.logInContainer}>

                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 22,
                    marginBottom: 20
                }}>Log In</Text>

                <View style={styles.inputWrapper}>
                    <TextInput style={{
                        ...styles.inputText,
                        backgroundColor: phone.err.length > 0 ? '#ffffff' : '#f0f0f0',
                        borderColor: phone.err.length > 0 ? '#ff0000' : '#ffffff'
                    }}
                        keyboardType="phone-pad"
                        autoFocus={phone.err.length > 0 ? true : false}
                        onChangeText={(e) => setPhone({val: e, err: ''}) }
                        placeholder="Phone no." />
                    <Text style={{
                        ...styles.inputError,
                        display: phone.err.length > 1 ? "flex" : "none"
                    }} >{phone.err}</Text>
                </View>

                <View style={styles.inputWrapper}>
                    <TextInput style={{
                        ...styles.inputText,
                        backgroundColor: password.err.length > 0 ? '#ffffff' : '#f0f0f0',
                        borderColor: password.err.length > 0 ? '#ff0000' : '#ffffff'
                    }}
                        autoFocus={password.err.length > 0 ? true : false}
                        onChangeText={(e) => setPassword({val: e, err: '', wrongPasswordCount: password.wrongPasswordCount}) }
                        placeholder="Password" />
                    <Text style={{
                        ...styles.inputError,
                        display: password.err.length > 1 ? "flex" : "none"
                    }} >{password.err}</Text>

                    <Pressable onPress={() => {}} style={{ display: password.wrongPasswordCount > 2 ? 'flex': 'none' }}>
                        <Text style={{ ...styles.inputError,textAlign: 'right', color: '#0b68d4', paddingEnd: 20 }}>forgot password?</Text>
                    </Pressable>
                </View>

                <View style={styles.inputWrapper}>
                    <TouchableOpacity
                        style={[styles.inputText, styles.inputButton]}
                        onPress={handleLogIn} >
                        <Text style={styles.inputButtonText}>Log In</Text>
                    </TouchableOpacity>
                </View>

                <View style={{  alignSelf: 'center', flexDirection: 'row', marginTop: 20, }} >
                    <Text style={{fontSize: 12}}>Don't have an account ? </Text>
                    <Pressable onPress={() => {
                        
                    }} >
                        <Text style={{fontSize: 12, color: '#0b68d4'}}>Create new Account</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

const LogInSignUp = ({ navigation, route }) => {
    return (
        <Stack.Navigator
            tabBarOptions={{
                keyboardHidesTabBar: true
            }}
            initialRouteName="LogInSignUp"
        >
            <Stack.Screen name="LogInSignUp" component={LogInScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff'
    },

    logInContainer: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: '10%',
    },
    inputWrapper: {
        width: '100%',
        marginVertical: 7
    },
    inputText: {
        textAlign: 'left',
        borderWidth: 1,
        borderRadius: 10,
        paddingStart: 20
    },
    inputError: {
        color: 'red',
        fontSize: 12,
        marginLeft: 10,
        marginTop: 3,
        textTransform: 'lowercase'
    },
    inputButton: {
        padding: 12, borderWidth: 0, backgroundColor: '#0b68d4',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    inputButtonText: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#ffffff'
    },

});

export default LogInSignUp;
