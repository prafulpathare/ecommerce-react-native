import React from 'react';
import { useState, useEffect } from 'react';
import { ActivityIndicator, TouchableOpacity, FlatList, StyleSheet, Text, View, Image } from 'react-native';
import LabelValue from './LabelValue';
import Loader from './Loader';

const HorizontalList = (props) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        loadData();
    }, [])

    const loadData = async () => {
        fetch(props.link)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error));
    }

    return data.length > 0 ? (
        <View style={{ display: data.length > 0 ? "flex" : "none", backgroundColor: '#ffffff', }}>

            <Text style={{ ...styles.headerText, display: props.title === undefined ? "none" : "flex" }}>{props.title}</Text>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                horizontal={props.isHorizontal}
                renderItem={({ item }) =>
                    <TouchableOpacity style={styles.itemWrapper} onPress={() => props.navigate('Product', { productId: item.id })}>
                        <Image source={{ uri: item.image }} style={styles.itemImage} resizeMode={'contain'} />
                        <View style={{ padding: 10 }}>
                            <Text numberOfLines={1} style={styles.itemName} >{item.title}</Text>
                            <View style={{ flexDirection: 'row', marginTop: 5 }} >
                                <Text style={styles.itemPrice} >₹ {item.price}</Text>
                                <LabelValue fontSize={11} value={item.rating.rate} tintColor={['#fff', 'green']} />
                            </View>
                        </View>
                    </TouchableOpacity>
                }
            />
        </View>
    ) : (<Loader />);
};

const styles = StyleSheet.create({
    headerText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#444444',
        padding: 20,
        paddingTop: 20,
        textTransform: 'capitalize'
    },
    itemWrapper: {
        maxWidth: 240,
        paddingTop: 10,
    },
    itemImage: {
        height: 140
    },
    itemName: {
        color: '#333333'
    },
    itemPrice: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 15,
        flex: 2
    }
});

export default HorizontalList;
