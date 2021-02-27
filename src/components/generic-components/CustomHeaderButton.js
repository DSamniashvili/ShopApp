import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { HeaderButtons, HeaderButton } from 'react-navigation-header-buttons';

// define IconComponent, color, sizes and OverflowIcon in one place
const CustomHeaderButton = (props) => (
    <HeaderButton IconComponent={Icon} iconSize={props.iconSize || 23} color={props.color || 'salmon'} {...props} />
);

const CustomHeaderButtonsContainer = (props) => {
    return <HeaderButtons HeaderButtonComponent={CustomHeaderButton} {...props} />;
};

// const CustomHeaderButton = props => {
//     return (
//         <TouchableOpacity onPress={() => navigation.openDrawer()}>
//             <Icon name={'shopping-cart'} style={textStyle} size={24} color="#fff" />
//         </TouchableOpacity>
//     )
// }

export { CustomHeaderButtonsContainer };