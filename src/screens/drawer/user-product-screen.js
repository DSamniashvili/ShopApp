import React from 'react'
import { FlatList, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CustomHeader } from '../../components';

import ProductItem from '../../components/shop/ProductItem';

const UserProductScreen = ({ navigation }) => {
    const myProducts = useSelector(state => state.products.myProducts);
    const dispatch = useDispatch();

    const renderItem = ({ item }) => (
        <ProductItem
            isOwn={true}
            item={item}
            onViewDetails={() => navigation.navigate('HomeDetails', {
                id: item.id,
                titleParam: item.title,
            })} />
    )

    return (
        <SafeAreaView>
            <CustomHeader title={'My own products'} isHome={false} navigation={navigation} />

            <FlatList data={myProducts}
                keyExtractor={item => item.id}
                renderItem={renderItem} />
        </SafeAreaView>
    )
}

export { UserProductScreen };
