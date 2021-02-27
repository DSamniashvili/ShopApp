import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { CustomHeader } from '../../../components/index';


import { useReducer, useSelector } from 'react-redux';
import ProductItem from '../../../components/shop/ProductItem';

const HomeScreen = ({ route, navigation }) => {
    const products = useSelector(state => state.products.availableProducts);

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
                        onAddToCart={() => navigation.navigate('Notifications')} />} />
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
