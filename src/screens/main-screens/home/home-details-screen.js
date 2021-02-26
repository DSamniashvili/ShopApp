import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { CustomHeader } from '../../../components/index';

const HomeDetailsScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomHeader title={'Home details'} isHome={false} navigation={navigation} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home details!</Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text>Go back to home</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export { HomeDetailsScreen };