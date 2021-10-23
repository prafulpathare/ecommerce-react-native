
import React, { useEffect, useState, Node, setState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const ProfileScreen = ({ navigation }) => {

    return (

        <View>
            <Text>ProfileScreen</Text>
            <TouchableOpacity onPress={() => {
                navigation.navigate('LogInSignUp')
            }}
                style={{
                    padding: 10, marginTop: 100
                }}
            >
                <Text>Log Out</Text>
                </TouchableOpacity>
        </View>
    );
};


export default ProfileScreen;