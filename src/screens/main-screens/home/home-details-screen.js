import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';
import { ButtonComponent, CustomHeader } from '../../../components/index';

import { useSelector } from 'react-redux';
import { COLORS } from '../../../constants/color-constants';

const HomeDetailsScreen = ({ route, navigation }) => {
    const { titleParam, id } = route.params;
    const item = useSelector(state => state.products.availableProducts.find(item => item.id === id));

    const { title, price, imageUrl, description, ownerId } = item;

    return (
        <ScrollView>
            <SafeAreaView style={{ flex: 1 }}>
                <CustomHeader title={`${titleParam} details`} isHome={false} navigation={navigation} />
                <View style={styles.containerStyle}>
                    <Image style={styles.image} source={{ uri: imageUrl }} />
                    <View style={styles.contentContainerStyle}>
                        <ButtonComponent color={COLORS.DEFAULT} name="Add to cart" onPress={() => navigation.navigate('Notifications')} />
                        <View style={styles.titleAndDescContainer}>
                            <Text style={styles.textStyle, styles.heading2Style}>{title}</Text>
                            <Text style={styles.textStyle}>${price}</Text>
                        </View>
                        <Text style={styles.textStyle, styles.heading3Style}>Product description</Text>
                        <Text style={styles.textStyle, { paddingHorizontal: 20, textAlign: 'center' }}>{description}</Text>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: 400
    },
    textStyle: {
        fontSize: 18,
        marginVertical: 1,
        fontFamily: 'Roboto',
    },
    priceStyle: {
        fontSize: 14,
        color: '#888',
    },
    actionsStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleAndDescContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginVertical: 20
    },
    contentContainerStyle: {
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading3Style: {
        fontSize: 18,
    },
    heading2Style: {
        fontSize: 20,
    },
});


export { HomeDetailsScreen };