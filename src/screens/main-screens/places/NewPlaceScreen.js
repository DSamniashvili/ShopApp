import React, { useEffect, useState, useRef } from 'react';
import { View, Text, ScrollView, TextInput, Button, StyleSheet, TouchableOpacity, Alert, Platform, PermissionsAndroid } from 'react-native';
import { useDispatch } from 'react-redux';
import { addPlaceAction } from '../../../actions/place-actions';
import { COLORS } from '../../../constants/color-constants';
import ImagePicker from '../../../components/places/ImagePicker';
import { requestPermissions } from '../../../services/mapService';
import Geolocation from 'react-native-geolocation-service';




const NewPlaceScreen = ({ route, navigation }) => {
    const [granted, setGranted] = useState(null);
    const [coords, setCoords] = useState(null);
    const imageRef = useRef();
    const [title, setTitle] = useState();
    const dispatch = useDispatch();


    useEffect(() => {
        async function requestPermissionBound() {
            const permission = await requestPermissions();
            setGranted(permission);
        }
        requestPermissionBound();

    }, []);

    useEffect(() => {
        getCurrentLocation();
    }, [granted])

    const textChangeHandler = text => {
        setTitle(text);
    }

    const savePlaceHandler = () => {
        dispatch(addPlaceAction(title, imageRef.current.uri));
        navigation.goBack();
    }

    const saveFilePath = filePath => {
        imageRef.current = filePath;
    }

    const getCurrentLocation = async () => {
        if (granted) {
            Geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    let coords = {
                        latitude, longitude
                    }
                    setCoords(coords);
                },
                (error) => {
                    console.log(error.code, error.message);
                },
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
            );
        }
    }

    const setCoordsBound = (params) => {
        setCoords(params);
    }

    const openMaps = () => {
        navigation.navigate('Map', {
            params: {
                latitude: coords.latitude,
                longitude: coords.longitude,
                setCoordsBound,
            },
            screen: 'MapMainScreen'
        },
        );
    }

    return (
        <ScrollView>
            <View style={styles.form}>
                <Text style={styles.label}>Add a new place!</Text>
                <TextInput
                    value={title}
                    onChangeText={textChangeHandler}
                    style={styles.textInput} />
                <TouchableOpacity onPress={openMaps}>
                    <Text>Set location</Text>
                    <Text>Location: {coords?.latitude} / {coords?.longitude}</Text>
                </TouchableOpacity>
                <ImagePicker saveFilePath={saveFilePath} />
                <Button
                    title="save place"
                    onPress={savePlaceHandler}
                    color={COLORS.NAVYBLUE}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    form: {
        margin: 20,
    },
    label: {
        fontSize: 18,
        marginBottom: 15,
    },
    textInput: {
        borderBottomColor: COLORS.GREY,
        borderBottomWidth: 2,
        marginBottom: 15,
        paddingHorizontal: 2,
        paddingVertical: 4,
    }
})

export { NewPlaceScreen };

