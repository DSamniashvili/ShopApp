import React from 'react';
import { View, Text, SafeAreaView, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { CustomHeader } from '../../components/index';
import CartItem from '../../components/shop/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCartAction } from '../../actions/cart-actions';

const ShoppingCartScreen = ({ navigation }) => {

    const cartItems = useSelector(state => {
        const transformedCartItems = [];
        for (const key in state.cart.items) {
            transformedCartItems.push({
                productId: key,
                qty: state.cart.items[key].qty,
                price: state.cart.items[key].price,
                title: state.cart.items[key].title,
                sum: state.cart.items[key].sum,
            })
        }
        return transformedCartItems;
    });

    const cartTotal = useSelector(state => state.cart.totalAmount);
    const dispatch = useDispatch();


    const handleRemoveFromCart = (item) => {
        dispatch(removeFromCartAction(item.productId));
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomHeader title={'My Shopping Cart'} isHome={false} navigation={navigation} />
            <Text>Cart Total: {cartTotal.toFixed(2)}</Text>
            <Button title="Order now" disabled={cartItems.length === 0} onPress={() => console.warn('Order now', cartItems.length)} />
            <FlatList data={cartItems}
                keyExtractor={item => item.productId}
                renderItem={itemData => <CartItem
                    item={itemData.item}
                    onViewDetails={() => navigation.navigate('HomeDetails', {
                        id: itemData.item.productId,
                        titleParam: itemData.item.title,
                    })}
                    onRemoveFromCart={() => handleRemoveFromCart(itemData.item)} />} />
        </SafeAreaView>
    );
}

export { ShoppingCartScreen };