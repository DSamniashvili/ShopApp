import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { CustomHeader } from '../../components/index';

const RegistrationScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomHeader title={'Register'} isHome={false} navigation={navigation} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Registration screen!</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                    <Text>Register me!</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export { RegistrationScreen };
