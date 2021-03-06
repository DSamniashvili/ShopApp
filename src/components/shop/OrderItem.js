import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, Dimensions } from 'react-native';
import { Item } from 'react-navigation-header-buttons';
import { COLORS } from '../../constants/color-constants';
import { CustomHeaderButtonsContainer } from '../generic-components/CustomHeaderButton';
import { Card } from '../index';

const OrderItem = ({ totalAmount, readableDate, onViewOrderDetails, onDeleteOrder }) => {

    return (
        <TouchableOpacity onPress={onViewOrderDetails}>
            <Card cardCustomStyle={styles.productContainer}>
                <View style={styles.itemTitleStyle}>
                    <View style={styles.column}>
                        <Text>Total Amount: </Text>
                        <Text>{totalAmount}</Text>
                    </View>
                    <View style={styles.column}>
                        <Text>Order Date: </Text>
                        <Text>{readableDate}</Text>
                    </View>
                </View>
                <CustomHeaderButtonsContainer>
                    <Item title="orders list"
                        iconSize={24}
                        iconName="list-ul"
                        color={COLORS.NAVYBLUE}
                        onPress={onViewOrderDetails} />
                    <Item title="delete item"
                        iconName="trash-o"
                        iconSize={24}
                        color={COLORS.RED}
                        onPress={onDeleteOrder} />
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
    column: {
        width: '50%',
        flexDirection: 'column',
    },
    itemTitleStyle: {
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'center',
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

export default OrderItem;