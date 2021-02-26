import React from 'react';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';

const GameText = props => {
    const { customStyles } = props;
    const { bodyFont } = styles;


    return <Text {...props} style={{ ...bodyFont, ...customStyles }} />

}

const styles = StyleSheet.create({
    bodyFont: {
        fontFamily: 'DotGothic16-Regular',
    }
})

export { GameText };