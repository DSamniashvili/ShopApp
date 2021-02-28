import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, Dimensions } from 'react-native';
import { Item } from 'react-navigation-header-buttons';
import { COLORS } from '../../constants/color-constants';
import { CustomHeaderButtonsContainer } from '../generic-components/CustomHeaderButton';
import { Card } from '../index';

const OrderItem = ({ item, onViewDetails, onRemoveFromCart }) => {
    const { id, items, totalAmount, date } = item;

    return (
        <TouchableOpacity onPress={onViewDetails}>
            <Card cardCustomStyle={styles.productContainer}>
                <View style={styles.itemTitleStyle}>
                    <Text>{title}</Text>
                </View>
                <CustomHeaderButtonsContainer>
                    <Item title="View Product" iconName="eye" onPress={onViewDetails} />
                    <Item title="Remove Item"
                        iconName="remove"
                        iconSize={24}
                        color={COLORS.RED}
                        onPress={onRemoveFromCart} />
                </CustomHeaderButtonsContainer>
            </Card>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    productContainer: {
        maxWidth: Dimensions.get('window').width,
        width: Dimensions.get('window').width - 40,
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemTitleStyle: {
        width: '50%',
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
        width: '30%',
        flexDirection: 'row',
    },
    buttonStyle: {
        fontSize: 12,
    }
});

export default OrderItem;