import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, ActivityIndicator, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { CustomHeader, Loader } from '../../../components/index';
import { useDispatch } from 'react-redux';

import { useReducer, useSelector } from 'react-redux';
import ProductItem from '../../../components/shop/ProductItem';
import { addToCartAction } from '../../../actions/cart-actions';
import { fetchProducts } from '../../../actions/product-actions';

const HomeScreen = ({ route, navigation }) => {
    const products = useSelector(state => state.products.availableProducts);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleAddToCart = (item) => {
        dispatch(addToCartAction(item));
    }

    const handleViewDetails = (navigation, item) => {
        navigation.navigate('HomeDetails', {
            id: item.id,
            titleParam: item.title,
        });
    }

    const loadProducts = useCallback(async () => {
        setError('');
        setIsLoading(true);
        try {
            await dispatch(fetchProducts());
        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    }, [dispatch, setIsLoading, setError]);

    // when changing screens from drawer navigation, view does not get re-rendered. it is saved in memory.
    // it is not true about Stack navigation

    // on every focus change, we watch loadProducts. 
    useEffect(() => {
        const willFocusListener = navigation.addListener('focus', loadProducts);
        return () => {
            navigation.removeListener(willFocusListener);
        };
    }, [loadProducts]);


    // useEffect(() => {
    //     loadProducts();
    // }, [loadProducts]);


    // removed CustomHeader since home screen implements react-native default navigation 
    // with the help of react-navigation-custom-buttons
    // <CustomHeader
    // title={'Home'}
    // isHome={true}
    // navigation={navigation} />

    if (error) {
        return (
            <View style={styles.centered}>
                <Text>{error}</Text>
                <Button onPress={loadProducts} title="Try again"></Button>
            </View>
        );
    }

    if (isLoading) {
        return <Loader size={'large'} />;
    }

    if (!isLoading && products.length === 0) {
        return (
            <View style={styles.centered}>
                <Text>No products loaded</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                {
                    <FlatList data={products}
                        keyExtractor={item => item.id}
                        renderItem={itemData => <ProductItem
                            isOwn={false}
                            item={itemData.item}
                            onViewDetails={() => handleViewDetails(navigation, itemData.item)}
                            onAddToCart={() => handleAddToCart(itemData.item)} />} />

                }
            </View>
        </SafeAreaView>
    );
}

const styles = {
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: 'center',
        padding: 5,
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
}

export { HomeScreen };
