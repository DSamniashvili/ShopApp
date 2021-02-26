import React from 'react'
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>
                {props.headerText}
            </Text>
        </View>
    )

}




const styles = {
    textStyle: {
        fontSize: 20,
    },
    viewStyle: {
        position: 'relative',
        height: 50,
        paddingTop: 15,
        width: '100%',
        backgroundColor: '#f8f8f8',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.5,
        elevation: 5,
    }
}


export { Header };
