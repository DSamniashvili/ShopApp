import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { CustomHeader } from '../../../components/index';

const SettingsScreen = ({ route, navigation }) => {

    const { container, horizontal } = styles;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomHeader title={'SettingsScreen'} isHome={true} navigation={navigation} />
            <View style={container}>
                <Text>SettingsScreen!</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SettingsDetails')}>
                    <Text>Go to Settings Screen details!</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = {
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
}

export { SettingsScreen };
