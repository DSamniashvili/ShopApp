import React from 'react';
import { Image, View, Text } from 'react-native';
import { IMAGE } from '../../constants/image-constants';


const LogoTitle = (props) => {

    const { width, height, title, img, ...rest } = props;

    return (
        <Image
            style={{ width, height }}
            source={IMAGE.LOGO}
        />
    );
}

export { LogoTitle };
