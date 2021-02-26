import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { CustomHeader } from '../../../components/index';

const SettingsDetailsScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomHeader title={'Settings details'} isHome={false} navigation={navigation} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings details!</Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text>Go back to Settings</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export { SettingsDetailsScreen };