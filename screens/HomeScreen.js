
import React, { useEffect, useState, Node, setState } from 'react';
import { View, StyleSheet, Text, TextInput, StatusBar, ScrollView, SafeAreaView } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import HorizontalList from '../components/HorizontalList';
import Header from '../components/Header';

const HomeScreen = ({ navigation }) => {

    const [sliders, setSliders] = useState([
        'https://media1.popsugar-assets.com/files/thumbor/aE3EHrt_FvLGy30jPKfZPWg__qM/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/08/17/651/n/1922283/99dde2155b76ddb9115023.04123404_/i/World-Highest-Paid-Actress-2018.jpg',
        'https://www.fashionphotographersmumbai.com/images/anamika/anamika.jpg',
        'https://envato-shoebox-0.imgix.net/64e0/b179-d129-40ac-b7db-31862de102b1/Neon+Color+23+07.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=48435d6fbca5b7773fd49b6613c6b311',
        'https://assets.vogue.in/photos/5fa25f3bcc4249840f895040/1:1/w_1999,h_1999,c_limit/Daryl-Hannah-Fashion,-American-Vogue-Los-Angeles-1984-Helmut-Newton-%C2%A9-The-Helmut-Newton-Estate--Maconochie-Photography.jpg',
        'https://images.squarespace-cdn.com/content/v1/55c0b4ede4b06f6d00a6c152/1630603375538-RVS1AR5SLN7V6C71L7PG/_DSF5847b.jpg',
        'https://www.filmibeat.com/wimgm/1366x70/desktop/2019/08/disha-patani_24.jpg',
        'https://image.simplecastcdn.com/images/b81ea455-8652-4810-bc86-f6172e6f6e8b/7b46d20a-5000-4120-900e-ac730e93282c/3000x3000/whatsapp_image_2019_08_21_at_21_47_23_copy.jpg?aid=rss_feed'
    ])

    return (

        <View style={styles.mainContainer}>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            <ScrollView>

                <Header navigate={navigation.navigate} />

                <View style={styles.mainCover}>
                    <SliderBox
                        autoplay={true}
                        resizeMethod='scale'
                        resizeMode='cover'
                        sliderBoxHeight={400}
                        imageLoadingColor={'#3B5998'}
                        circleLoop={true}
                        dotStyle={{ width: 5, height: 5, borderRadius: 5, marginHorizontal: 0, padding: 0, margin: 0, }}
                        images={sliders}
                    />
                </View>

                <HorizontalList
                    navigate={navigation.navigate}
                    isHorizontal={true}
                    link={'https://fakestoreapi.com/products?limit=7'}
                    title={'new release'} />

                <HorizontalList
                    navigate={navigation.navigate}
                    isHorizontal={true}
                    link={'https://fakestoreapi.com/products?limit=7'}
                    title={'Trending'} />

            </ScrollView>
        </View>
    );
};


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: '#ffffff'
    },


});
export default HomeScreen;