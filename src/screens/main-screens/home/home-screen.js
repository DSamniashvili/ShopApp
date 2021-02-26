import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { CustomHeader } from '../../../components/index';

const HomeScreen = ({ route, navigation }) => {

    const { container, horizontal } = styles;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomHeader title={'Home'} isHome={true} navigation={{ navigation }} />
            <View style={container}>
                <Text>Home screen</Text>
                <Text></Text>
                <TouchableOpacity onPress={() => navigation.navigate('HomeDetails')}>
                    <Text>Go to home details page</Text>
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

export { HomeScreen };
