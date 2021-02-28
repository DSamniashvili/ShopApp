import React from 'react';
import { View, Text, SafeAreaView, Button, Alert } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { CustomHeader } from '../../components/index';
import CartItem from '../../components/shop/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCartAction, emptyCartAction } from '../../actions/cart-actions';
import { addOrderAction } from '../../actions/orders-actions';

const OrdersScreen = ({ navigation }) => {
    const orders = useSelector(state => state.orders.orders);
    const dispatch = useDispatch();


    const handleBuyItems = ({ navigation }) => {
        // dispatch(removeFromCartAction(item.productId));
        Alert.alert('Congratulations', "Your orders have been placed", [{
            text: 'Got it',
            style: 'cancel',
        }]);
        navigation.navigate('Home');
    }

    // const handleOrderNow = () => {
    //     dispatch(addOrderAction(cartItems, cartTotal));
    //     dispatch(emptyCartAction());
    //     navigation.navigate('Orders');
    // }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomHeader title={'Orders'} handleGoBack={() => navigation.navigate('Home')} isHome={false} navigation={navigation} />
            <Button title="Buy" onPress={handleBuyItems} />
            <FlatList data={orders}
                keyExtractor={item => item.item}
                renderItem={itemData => <Text>{itemData.item.totalAmount}</Text>} />
        </SafeAreaView>
    );
}

export { OrdersScreen };