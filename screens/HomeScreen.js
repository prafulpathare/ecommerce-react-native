
import React, { useEffect, useState, Node, setState } from 'react';
import { View, Text, TextInput } from 'react-native';

const HomeScreen = ({ navigation }) => {

    return (

        <View>
            <Text>HomeScreen</Text>
            <TextInput placeholder="Search..." />
        </View>
    );
};


export default HomeScreen;