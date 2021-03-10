import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

const PlaceDetailScreen = ({ route, navigation }) => {
    const { id, title } = route.params;

    return (
        <View>
            <Text>PlaceDetail Screen id: {id}</Text>
            <Text>PlaceDetail Screen {title}</Text>
        </View>
    )
}

export { PlaceDetailScreen };
