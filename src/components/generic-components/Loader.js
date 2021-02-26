import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';

const Loader = ({ size }) => {
    const { container, horizontal } = styles;
    return (
        <View style={[container, horizontal]}>
            <ActivityIndicator size={size || 'large'} color="#0000ff" />
        </View>
    )
}

const styles = {
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
}

export { Loader };
