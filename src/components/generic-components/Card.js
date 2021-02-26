import React from 'react'
import { Text, View } from 'react-native';

const Card = (props) => {
    const { containerStyle } = styles;
    const { cardCustomStyle } = props;
    return (
        <View style={{ ...containerStyle, ...cardCustomStyle }}>
            {props.children}
        </View>
    )
}

const styles = {
    containerStyle: {
        display: 'flex',
        flexDirection: 'column',
        margin: 10,

        // shadow only works on IOS
        shadowColor: 'black',
        shadowRadius: 6,
        shadowOpacity: 0 / 26,
        shadowOffset: { width: 0, height: 2 },
        // elevation only works on android
        elevation: 4,
        padding: 20,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
}


export { Card };
