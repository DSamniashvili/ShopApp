import React from 'react'
import { Text, View } from 'react-native';

const CardSection = (props) => {
    const { containerStyle } = styles;
    return (
        <View style={containerStyle}>
            {props.children}
        </View>
    )
}

const styles = {
    containerStyle: {
        display: 'flex',
        flexDirection: 'row',
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        borderColor: '#ddd',
        position: 'relative',
    },
}


export { CardSection };
