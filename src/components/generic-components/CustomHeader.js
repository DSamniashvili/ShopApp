import React from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { IMAGE } from '../../constants/image-constants';
import { COLORS } from '../../constants/color-constants';

const CustomHeader = ({ title, navigation, isHome, handleGoBack }) => {

    const { imageStyles, containerStyles } = styles;

    const handleGoBackBound = (navigation) => {
        if (handleGoBack) {
            handleGoBack();
        } else {
            navigation.goBack();
        }

    }

    return (
        <View style={{ flexDirection: 'row', backgroundColor: '#fff', height: 50, position: 'relative', top: 0, left: 0, width: '100%' }} >
            <View style={containerStyles} >
                {
                    isHome ?
                        <TouchableOpacity onPress={() => navigation.openDrawer()}>
                            <Image
                                style={imageStyles}
                                source={IMAGE.BURGER_MENU}
                            />
                        </TouchableOpacity> :
                        <TouchableOpacity onPress={() => handleGoBackBound(navigation)}>
                            <Image
                                style={imageStyles}
                                source={IMAGE.BACK_ICON}
                            />
                        </TouchableOpacity>
                }
            </View>

            <View style={{ flex: 1.5, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                <Text>{title}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }} >
            </View>
        </View >
    )
}

const styles = {
    containerStyles: {
        flex: 1,
        justifyContent: 'center',

    },
    imageStyles: {
        marginLeft: 10,
        width: 25,
        height: 25
    },
}

export { CustomHeader };
