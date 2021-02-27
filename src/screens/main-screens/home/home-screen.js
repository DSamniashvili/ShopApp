import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { CustomHeader } from '../../../components/index';
import { useDispatch } from 'react-redux';



import { useReducer, useSelector } from 'react-redux';
import ProductItem from '../../../components/shop/ProductItem';
import { addToCartAction } from '../../../actions/cart-actions';

const HomeScreen = ({ route, navigation }) => {
    const products = useSelector(state => state.products.availableProducts);
    const dispatch = useDispatch();

    const handleAddToCart = (item) => {
        console.log('handleAddToCart', item);
        dispatch(addToCartAction(item));
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomHeader
                title={'Home'}
                isHome={true}
                navigation={navigation} />
            <View style={styles.container}>
                <FlatList data={products}
                    renderItem={itemData => <ProductItem
                        item={itemData.item}
                        onViewDetails={() => navigation.navigate('HomeDetails', {
                            id: itemData.item.id,
                            titleParam: itemData.item.title,
                        })}
                        onAddToCart={() => handleAddToCart(itemData.item)} />} />
            </View>
        </SafeAreaView>
    );
}

const styles = {
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
}

export { HomeScreen };
