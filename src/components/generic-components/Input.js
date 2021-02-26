import React from 'react';
import { TextInput } from 'react-native';
import { COLORS } from '../../constants/color-constants';

const Input = props => {
    const { customInputStyles } = props;

    return <TextInput {...props} style={{ ...styles, ...customInputStyles }} />

}

const styles = {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.GREY,
}

export { Input };