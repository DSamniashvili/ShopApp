import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, Dimensions } from 'react-native';
import { Item } from 'react-navigation-header-buttons';
import { COLORS } from '../../constants/color-constants';
import { CustomHeaderButtonsContainer } from '../generic-components/CustomHeaderButton';
import { Card } from '../index';

const OrderDetailItem = ({ item }) => {
    const { price, title, qty, sum } = item;

    return (
        <Card cardCustomStyle={styles.productContainer}>
            <View style={styles.itemTitleStyle}>
                <View style={styles.column, styles.columnTitle}>
                    <Text>Title </Text>
                    <Text>{title && title.length > 10 ? title.substring(0, 9) + '...' : title}</Text>
                </View>
                <View style={styles.column}>
                    <Text>price</Text>
                    <Text>{price}</Text>
                </View>

                <View style={styles.column}>
                    <Text>Quantity</Text>
                    <Text>{qty}</Text>
                </View>
                <View style={styles.column}>
                    <Text>sum</Text>
                    <Text>{sum}</Text>
                </View>
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    productContainer: {
        width: Dimensions.get('window').width - 70,
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    column: {
        width: '25%',
        flexDirection: 'column',
        overflow: 'hidden',
    },
    columnTitle: {
        // width: '50%',
        overflow: 'hidden',
    },
    itemTitleStyle: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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

export default OrderDetailItem;