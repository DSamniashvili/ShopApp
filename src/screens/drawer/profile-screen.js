
import React from 'react';
import { View, Button, Text, StyleSheet, SafeAreaView } from 'react-native';
import { CustomHeader } from '../../components/index';

const ProfileScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomHeader title={'Profile page'} isHome={true} navigation={navigation} />
            <View style={{ ...styles, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 40 }}>Profile Screen</Text>
                <Text style={{ fontSize: 20 }}>Welcome to the Profile screen</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export { ProfileScreen };