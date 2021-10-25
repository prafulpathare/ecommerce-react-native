
import React, { useEffect, useState, Node, setState } from 'react';
import { Text, View, StyleSheet, Pressable, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import HorizontalList from '../components/HorizontalList';
import LabelValue from '../components/LabelValue';
import Loader from '../components/Loader';

const ProductScreen = ({ route, navigation }) => {

    const { productId } = route.params;
    const [product, setProduct] = useState({});

    useEffect(() => {
        loadData();
    }, [])


    const loadData = async () => {
        fetch('https://fakestoreapi.com/products/' + productId)
            .then((response) => response.json())
            .then((json) => setProduct(json))
            .catch((error) => console.error(error));
    }


    return 'price' in product ? (

        <View style={styles.mainContainer}>
            <View style={styles.header}>
                <Pressable onPress={() => navigation.goBack()} style={{
                    alignSelf: 'center',
                    justifyContent: 'center',
                    flex: 2,
                }} >
                    <Image source={require('../assets/icons/backArrow.png')}
                        resizeMode={'contain'}
                        style={{
                            height: 25,
                            alignSelf: 'center',
                            justifyContent: 'center',
                        }}
                    />
                </Pressable>
                <Text numberOfLines={1} style={styles.productName}>{product.title}</Text>
            </View>

            <ScrollView style={{ marginTop: 50, marginBottom: 70 }}>

                <SliderBox
                    resizeMethod='scale'
                    resizeMode='contain'
                    sliderBoxHeight={300}
                    imageLoadingColor={'#3B5998'}
                    dotStyle={{ width: 5, height: 5, borderRadius: 5, marginHorizontal: 0, padding: 0, margin: 0, }}
                    images={[product.image], [product.image]} />

                <View style={{ marginTop: 20, padding: 20 }}>
                    <Text style={{
                        lineHeight: 20, fontWeight: 'bold', fontSize: 18,
                        color: '#444', textTransform: 'uppercase',
                        marginBottom: 20
                    }}>{product.title}</Text>

                    <Text style={{
                        lineHeight: 20, color: '#444'
                    }}>{product.description}</Text>

                </View>

                {/* more products  */}
                <HorizontalList
                    navigate={navigation.push}
                    isHorizontal={true}
                    link={'https://fakestoreapi.com/products'} />


            </ScrollView>

            <View style={{
                flexDirection: 'row',
                margin: 10,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                bottom: 0,
            }}>
                <TouchableOpacity onPress={() => { }} style={styles.addToCartButton}>
                    <Image source={require('../assets/icons/cart.png')}
                        resizeMode={'contain'}
                        style={{
                            width: 20, height: 20,
                            tintColor: '#fff',
                        }}
                    />
                    <Text style={{
                        fontWeight: 'bold', marginLeft: 15,
                        textAlign: 'left',
                        color: '#fff'
                    }}>Add to Cart</Text>
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: 'center' }} >
                    <Text style={{
                        color: 'green', fontWeight: 'bold', fontSize: 20
                    }}>₹ {product.price}</Text>
                </View>
            </View>

        </View>
    ) : (<Loader />);
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1, paddingTop: 50, backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        paddingVertical: 10,
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 50
    },
    productName: {
        flex: 12,
        paddingEnd: 10,
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center',
        color: '#444'
    },


    addToCartButton: {
        flex: 1, flexDirection: 'row',
        backgroundColor: '#3b5998',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    }
});

export default ProductScreen;