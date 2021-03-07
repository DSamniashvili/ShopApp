import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, Dimensions } from 'react-native';
import { Card } from '../index';

const ProductItem = ({ isOwn, item, onViewDetails, onAddToCart, onEditProduct, onDeleteProduct }) => {
    const { title, price, imageUrl } = item;

    return (
        <TouchableOpacity onPress={onViewDetails}>
            <Card cardCustomStyle={styles.productContainer}>
                <Image style={styles.image} source={{ uri: imageUrl }} />
                <Text style={styles.titleStyle}>{title}</Text>
                <Text style={styles.priceStyle}>${price.toFixed(2)}</Text>
                {
                    !isOwn ?
                        <View style={styles.actionsStyle}>
                            <Button title="View Details" onPress={onViewDetails} />
                            <Button title="To Cart" onPress={onAddToCart || null} />
                        </View> :
                        <View style={styles.actionsStyle}>
                            <Button title="Edit Product" onPress={onEditProduct} />
                            <Button title="Delete Product" onPress={onDeleteProduct || null} />
                        </View>
                }

            </Card>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    productContainer: {
        maxWidth: Dimensions.get('window').width,
        width: Dimensions.get('window').width - 40,
        height: 250,
    },
    image: {
        width: '100%',
        height: '70%',
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