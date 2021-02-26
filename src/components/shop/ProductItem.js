import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { Card } from '../index';

const ProductItem = ({ item }, ...props) => {
    const { title, price, imageUrl } = item;
    return (
        <Card cardCustomStyle={styles.productContainer}>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.titleStyle}>{title}</Text>
            <Text style={styles.priceStyle}>${price.toFixed(2)}</Text>
            <View style={styles.actionsStyle}>
                <Button title="View Details" onPress={props.onViewDetails} />
                <Button title="To Cart" onPress={props.onAddToCart} />
            </View>
        </Card>
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