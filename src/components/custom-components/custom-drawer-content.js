import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native';
import { IMAGE } from '../../constants/image-constants';

import { useDispatch, useSelector } from "react-redux";
import { signOutUserAction } from '../../actions/index';




const CustomDrawerContent = ({ navigation }) => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(signOutUserAction());
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ height: 50, alignItems: 'center', justifyContent: 'center' }}>
                <Image style={{ width: 30, height: 30 }}
                    source={IMAGE.LOGO}
                />
            </View>
            <ScrollView style={{ marginLeft: 20 }}>
                <TouchableOpacity onPress={() => navigation.navigate('MenuTab')} style={{ marginTop: 20 }}>
                    <Text>MenuTab</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={{ marginTop: 20 }}>
                    <Text>Shopping Cart</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Game')} style={{ marginTop: 20 }}>
                    <Text>Game</Text>
                </TouchableOpacity>

            </ScrollView>

            <TouchableOpacity onPress={handleLogout} style={{ marginBottom: 20, marginLeft: 20 }}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export { CustomDrawerContent };