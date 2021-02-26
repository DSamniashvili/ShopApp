import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { CustomHeader } from '../../components/index';

const NotificationsScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomHeader title={'Notifications'} isHome={false} navigation={navigation} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Notifications screen!</Text>

            </View>
        </SafeAreaView>
    );
}

export { NotificationsScreen };