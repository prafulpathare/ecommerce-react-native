import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const LabelValue = (props) => {

    return (
        <View style={{
            flex: 1, height: props.fontSize + 6, maxWidth: 45, maxHeight: 20, flexDirection: 'row', borderRadius: 10, justifyContent: 'center', alignItems: 'center',
            backgroundColor: props.tintColor[1],
        }}>
            <Image source={require('../assets/icons/star.png')} resizeMode={'contain'} style={{
                flex: 1,
                tintColor: props.tintColor[0],
                height: props.fontSize - 1
            }}
            />
            <Text style={{
                flex: 1, fontSize: props.fontSize, paddingEnd: 0,
                color: props.tintColor[0], fontWeight: 'bold'
            }}>{props.value}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default LabelValue;
