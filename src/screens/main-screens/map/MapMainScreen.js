import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const MapMainScreen = ({ navigation, route }) => {
    const { latitude, longitude } = route.params;


    const changeLatAndLong = (e) => {
        const { latitude, longitude } = e.nativeEvent.coordinate;
        route.params.setCoordsBound({ latitude, longitude });
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={{
                    latitude,
                    longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
                <Marker
                    coordinate={{ latitude, longitude }}
                    draggable
                    isPreselected={true}
                    onDragEnd={(e) => changeLatAndLong(e)}
                    title={'You are here'}
                />
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 500,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export { MapMainScreen }
