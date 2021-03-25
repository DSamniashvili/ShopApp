import React from 'react';
import { PermissionsAndroid, Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';


export const requestPermissions = async () => {
    if (Platform.OS === 'ios') {
        const permissionValue = Geolocation.requestAuthorization();
        Geolocation.setRNConfiguration({
            skipPermissionRequests: false,
            authorizationLevel: 'whenInUse',
        });
    }

    if (Platform.OS === 'android') {
        const permissionValue = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            // {
            //     'title': 'Grant location permoission',
            //     'message': 'Let us Know where you are '
            // }
        );

        if (permissionValue === 'granted') {
            return true;
        }
        return false;
    }
}
