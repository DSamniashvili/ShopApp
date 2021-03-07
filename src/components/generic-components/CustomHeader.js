import React from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, Button } from 'react-native';
import { IMAGE } from '../../constants/image-constants';
import { COLORS } from '../../constants/color-constants';
import { useDispatch } from 'react-redux';

const CustomHeader = ({ title, isHome, navigation, enableEditButton = false, handleGoBack, handleGoToEdit }) => {
    const dispatch = useDispatch();

    const { imageStyles, containerStyles } = styles;

    const handleGoBackBound = (navigation) => {
        if (handleGoBack) {
            handleGoBack();
        } else {
            navigation.goBack();
        }
    }

    // const handleGoToEditBound = (navigation) => {
    //     if (handleGoToEdit) {
    //         handleGoToEdit();
    //     }
    //     // dispatch(onEditProductAction(item));
    // }

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
                {
                    enableEditButton ?
                        <TouchableOpacity onPress={handleGoToEdit}>
                            <Text>Edit</Text>
                        </TouchableOpacity> :
                        null
                }

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
