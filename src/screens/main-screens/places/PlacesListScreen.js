import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import PlaceItem from '../../../components/places/PlaceItem';
import { requestPermissions } from '../../../services/mapService';

const PlacesListScreen = ({ route, navigation }) => {
    const places = useSelector(state => state.places.places);

    const handleSelect = item => {
        navigation.navigate('PlaceDetails', {
            title: item.title,
            id: item.id,
        })
    }

    const renderItem = (itemData) => {
        return <PlaceItem
            image={itemData.item.image || null}
            title={itemData.item.title}
            address={itemData.item.address || null}
            onSelect={handleSelect.bind(this, itemData.item)}
        />
    }

    return (
        <View>
            {
                places.length > 0 ?
                    <FlatList
                        data={places}
                        keyExtractor={item => item.id}
                        renderItem={renderItem}
                    /> :
                    <Text> No Places selected yet</Text>
            }

        </View>
    )
}

export { PlacesListScreen };

