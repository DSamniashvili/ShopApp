import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS } from '../../constants/color-constants';

const PlaceItem = ({ onSelect, image, title, address }) => {
    return (
        <TouchableOpacity onPress={onSelect} style={styles.placeItem}>
            <Image style={styles.image} source={{ uri: image }} />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.address}>{address}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    placeItem: {
        borderBottomColor: COLORS.GREY,
        borderBottomWidth: 1,
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 15,
        alignItems: 'center',
    },
    infoContainer: {
        width: 250,
        height: 70,
        justifyContent: 'center',
        alignItems: 'flex-start',

    },
    image: {
        width: 70,
        height: 70,
        marginRight: 5,
        backgroundColor: COLORS.NAVYBLUE,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
    },
    address: {
        fontSize: 14,
        fontStyle: 'italic',
    }
})

export default PlaceItem;
