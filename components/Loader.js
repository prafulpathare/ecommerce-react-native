import React from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';

const Loader = (props) => {

    return (
        <View style={{ flex: 1, height: props.height === undefined ? 400 : props.height, justifyContent: 'center', alignSelf: 'center' }}>
            <ActivityIndicator size={'large'} />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default Loader;
