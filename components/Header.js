import React from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, Pressable } from 'react-native';

const Header = (props) => {

    return (
        <View style={styles.headerWrapper}>
            <Pressable style={styles.headerButton} onPress={() => { }} >
                <Image source={require('../assets/icons/menu.png')}
                    resizeMode={'contain'}
                    style={styles.headerIcon}
                />
            </Pressable>

            <Image source={{ uri: 'https://i2.wp.com/zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-HD.png?fit=841%2C240&ssl=1' }}
                resizeMode={'contain'}
                style={{
                    flex: 5,
                    height: 30, justifyContent: 'center', alignSelf: 'center'
                }}
            />

            <Pressable style={styles.headerButton} onPress={() => { props.navigate('Search') }} >
                <Image source={require('../assets/icons/search.png')}
                    resizeMode={'contain'}
                    style={styles.headerIcon}
                />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    headerWrapper: {
        flexDirection: 'row', justifyContent: 'center', alignSelf: 'center'
    },

    headerButton: {
        flex: 1, paddingVertical: 20
    },

    headerIcon: {
        width: '100%',
        height: 20,
        tintColor: '#444'
    }
});

export default Header;
