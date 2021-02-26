import React from 'react'
import { View, Text, TouchableOpacity, Linking, Platform, TouchableNativeFeedback, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const ButtonComponent = (props) => {
    let ButtonComponent = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        ButtonComponent = TouchableNativeFeedback;
    }

    const { textStyle } = styles;

    return (
        <View style={styles.buttonContainerStyle}>
            <ButtonComponent
                activeOpacity={0.8}
                disabled={props.disabled}
                onPress={props.onPress}>
                <View style={{
                    borderRadius: 20,
                    backgroundColor: props.color,
                }}>
                    {
                        props.icon && <Icon name={props.icon} style={textStyle} size={24} color="#fff" />
                    }
                    {
                        props.name &&
                        <Text style={textStyle}>
                            {props.name}
                        </Text>
                    }

                    {props.children}

                </View>
            </ButtonComponent>
        </View>
    )
}

const styles = {
    buttonContainerStyle: {
        borderRadius: 20,
        overflow: 'hidden',
    },
    textStyle: {
        fontSize: 14,
        padding: 10,
        color: '#fff',
        textAlign: 'center'
    }
}

// We are doing this because we are exporting all common components in src/index.js file.
// So here should not be default exports.
export { ButtonComponent };
