import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const EditProductScreen = ({ route, navigation }) => {
    const { id } = route.params;
    const item = useSelector(state => state.products.availableProducts.find(item => item.id === id));

    const { title, price, imageUrl, description, ownerId } = item;

    return (
        <View>
            <Text>{title}</Text>
        </View>
    )
}

export { EditProductScreen };
