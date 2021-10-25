import React from 'react';
import { useState, useEffect } from 'react';
import { ActivityIndicator, TouchableOpacity, FlatList, StyleSheet, Text, View, Image } from 'react-native';
import LabelValue from './LabelValue';
import Loader from './Loader';

const VerticalList = (props) => {

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
        <View style={{ display: data.length > 0 ? "flex" : "none", padding: 10, backgroundColor: '#ffffff', }}>
            <Text style={styles.dataCountLabel}>{data.length} products found for '{props.title}'</Text>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                horizontal={props.isHorizontal}
                renderItem={({ item }) =>
                    <TouchableOpacity style={styles.itemWrapper} onPress={() => props.navigate('Product', { productId: item.id })}>
                        <Image source={{ uri: item.image }} style={styles.itemImage} resizeMode={'contain'} />
                        <View style={styles.itemDescription}>
                            <Text style={styles.itemName} >{item.title}</Text>
                            <LabelValue fontSize={12} value={item.rating.rate} tintColor={['#e99f00', '#fff']} />
                            <View style={{ flexDirection: 'row', marginTop: 10 }} >
                                <Text style={styles.itemPrice} >₹ {item.price}</Text>
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
        paddingHorizontal: 20,
        textTransform: 'capitalize'
    },
    dataCountLabel: {
        fontSize: 11,
        paddingBottom: 10,
        paddingLeft: 20,
        color: '#444'
    },
    itemWrapper: {
        padding: 10,
        paddingLeft: 0,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#eeeeee',
    },
    itemImage: {
        flex: 3,
        paddingRight: 20,
        paddingLeft: 40,
        height: 120
    },
    itemDescription: {
        flex: 10,
        paddingRight: 10,
        marginLeft: 20,
    },
    itemName: {
        fontSize: 14,
        marginBottom: 7,
        color: '#000000'
    },
    itemPrice: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 16,
        flex: 2
    }
});

export default VerticalList;
