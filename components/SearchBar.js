import React from 'react';
import { TextInput, StyleSheet, Text, View, Image } from 'react-native';

const SearchBar = (props) => {

    const onChangeQ = (e) => {
        props.onSearchTextChange(e);
    }

    return (
        <View style={styles.searchBarWrapper}>
            <Image source={require('../assets/icons/search.png')}
                style={{
                    flex: 1, height: 25, tintColor: '#999999',
                }} resizeMode={'contain'} />
            <TextInput placeholder={'Search...'} style={{
                flex: 6,
            }} onChangeText={onChangeQ} />
        </View>
    );
};

const styles = StyleSheet.create({
    searchBarWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eeeeee',
        margin: 10,
        borderRadius: 10
    }
});

export default SearchBar;
