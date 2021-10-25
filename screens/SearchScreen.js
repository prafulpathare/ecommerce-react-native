
import React, { useEffect, useState, Node, setState } from 'react';
import { StatusBar, View, Text, StyleSheet, TextInput, Image } from 'react-native';
import SearchBar from '../components/SearchBar';
import VerticalList from '../components/VerticalList';

const SearchScreen = ({ navigation }) => {

    const [q, setQ] = useState('');

    useEffect(() => {

    }, [q])

    const handleChangeQ = (e) => {
        setQ(e)
    }

    return (
        <View style={styles.mainContainer}>
            <StatusBar translucent backgroundColor="#ffffff" barStyle="dark-content" />

            <SearchBar onSearchTextChange={handleChangeQ} />

            <VerticalList
                title={q}
                navigate={navigation.navigate}
                link={'https://fakestoreapi.com/products'} />
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginTop: 40,
        backgroundColor: '#ffffff'
    },

});

export default SearchScreen;