
import React, { useEffect, useState, Node, setState } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet, Text, View } from 'react-native';

import ProfileScreen from '../screens/ProfileScreen';
import CartScreen from '../screens/CartScreen';
import MainSearchScreen from '../screens/SearchScreen';
import MainHomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();


const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                unmountOnBlur: true,
                style: {
                   
                    // ...styles.shadow
                }
            }}
        >
            <Tab.Screen name="Home" component={MainHomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 0 }} >
                            <Image
                                source={require('../assets/icons/home.png')}
                                resizeMode='contain'
                                style={{
                                    width: 24,
                                    height: 24,
                                    tintColor: focused ? '#2981e6' : '#748c94'
                                }}
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen name="Search" component={MainSearchScreen}
                
                options={{
                    tabBarVisible: false,                
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 0 }} >
                            <Image
                                source={require('../assets/icons/search.png')}
                                resizeMode='contain'
                                style={{
                                    width: 24,
                                    height: 24,
                                    tintColor: focused ? '#2981e6' : '#748c94'
                                }}
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen name="Cart" component={CartScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 0 }} >
                        <Image
                            source={require('../assets/icons/cart.png')}
                            resizeMode='contain'
                            style={{
                                width: 24,
                                height: 24,
                                tintColor: focused ? '#2981e6' : '#748c94'
                            }}
                        />
                    </View>
                )
            }}
            />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 0 }} >
                        <Image
                            source={require('../assets/icons/user.png')}
                            resizeMode='contain'
                            style={{
                                width: 24,
                                height: 24,
                                tintColor: focused ? '#2981e6' : '#748c94'
                            }}
                        />
                    </View>
                )
            }}
            />
        </Tab.Navigator>
    )
}


const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})

export default Tabs;