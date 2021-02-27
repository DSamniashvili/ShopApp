import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Card } from '../index';

const ProductItem = ({ item, onViewDetails, onAddToCart }) => {
    console.log('ProductItem', onViewDetails);
    const { title, price, imageUrl } = item;

    return (
        <TouchableOpacity onPress={onViewDetails}>
            <Card cardCustomStyle={styles.productContainer}>
                <Image style={styles.image} source={{ uri: imageUrl }} />
                <Text style={styles.titleStyle}>{title}</Text>
                <Text style={styles.priceStyle}>${price.toFixed(2)}</Text>
                <View style={styles.actionsStyle}>
                    <Button title="View Details" onPress={onViewDetails} />
                    <Button title="To Cart" onPress={onAddToCart} />
                </View>
            </Card>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    productContainer: {
        height: 300,
        width: 300,
    },
    image: {
        width: '100%',
        height: '60%',
    },
    titleStyle: {
        fontSize: 18,
        marginVertical: 4,
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
    }
});

export default ProductItem;