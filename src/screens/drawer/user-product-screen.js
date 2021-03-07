import React from 'react'
import { FlatList, SafeAreaView, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductAction } from '../../actions/product-actions';
import { CustomHeader } from '../../components';

import ProductItem from '../../components/shop/ProductItem';

const UserProductScreen = ({ navigation }) => {
    const myProducts = useSelector(state => state.products.myProducts);
    const dispatch = useDispatch();

    const handleDeleteProduct = (productId) => {
        dispatch(deleteProductAction(productId))
    }

    const renderItem = ({ item }) => (
        <ProductItem
            isOwn={true}
            item={item}
            onViewDetails={() => navigation.navigate('HomeDetails', {
                id: item.id,
                titleParam: item.title,
            })}
            onDeleteProduct={() => handleDeleteProduct(item.id)} />
    )

    return (
        <SafeAreaView>
            <CustomHeader title={'My own products'} isHome={false} navigation={navigation} />

            {
                myProducts && myProducts.length > 0 ?
                    <FlatList data={myProducts}
                        keyExtractor={item => item.id}
                        renderItem={renderItem} /> :
                    <Text>No products</Text>
            }

        </SafeAreaView>
    )
}

export { UserProductScreen };
