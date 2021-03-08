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

    const handleGoToEdit = (navigation, item) => {
        navigation.navigate('EditProduct', {
            id: item ? item.id : null,
        });
    }

    const renderItem = ({ item }) => (
        <ProductItem
            isOwn={true}
            item={item}
            onEditProduct={() => handleGoToEdit(navigation, item)}
            onDeleteProduct={() => handleDeleteProduct(item.id)} />
    )

    return (
        <SafeAreaView>
            <CustomHeader
                enableEditButton={true}
                handleGoToEdit={() => handleGoToEdit(navigation)}
                title={'My own products'}
                isHome={false}
                navigation={navigation} />

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
