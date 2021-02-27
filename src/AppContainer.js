import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Image, Button } from 'react-native';
import { IMAGE } from './constants/image-constants';
import Icon from 'react-native-vector-icons/FontAwesome';

import { LoginScreen, RegistrationScreen } from './screens/stack-screens/index';
import { HomeScreen, HomeDetailsScreen, SettingsScreen, SettingsDetailsScreen } from './screens/main-screens/index';
import { NotificationsScreen, ProfileScreen, StartGameScreen, PlayGameScreen, GameOverScreen } from './screens/drawer/index';
import { CustomDrawerContent, CustomHeaderButtonsContainer, LogoTitle } from './components/index';
import { Item } from 'react-navigation-header-buttons';

import { GameContainerScreen } from './screens/drawer/index';
import { COLORS } from './constants/color-constants';




const Stack = createStackNavigator();
const StackHome = createStackNavigator();
const StackSettings = createStackNavigator();
const StackGame = createStackNavigator();

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();



const navOptionsHandler = () => ({
    headerShown: false
});

// implemented header navigation with react-navigation-header-buttons library
const homeHeaderOptionsHandler = ({ navigation }) => ({
    headerTitle: props => <LogoTitle width={30} height={30} {...props} />,
    headerLeft: () => (
        <CustomHeaderButtonsContainer>
            <Item title="burger-menu"
                iconName="navicon"
                iconSize={20}
                color={COLORS.DEFAULT}
                onPress={() => navigation.openDrawer()} />
        </CustomHeaderButtonsContainer>
    ),
    headerRight: () => (
        <CustomHeaderButtonsContainer>
            <Item title="favourites" iconName="heart-o" onPress={() => console.warn('favourites')} />
            <Item title="shopping-cart"
                iconName="shopping-cart"
                iconSize={24}
                color={COLORS.DEFAULT}
                onPress={() => navigation.navigate('Notifications')} />
        </CustomHeaderButtonsContainer>
    ),
});

function HomeStack() {
    return (
        <StackHome.Navigator initialRouteName="Home">
            <StackHome.Screen name="Home" component={HomeScreen} options={homeHeaderOptionsHandler} />
            <StackHome.Screen name="HomeDetails" component={HomeDetailsScreen} options={navOptionsHandler} />
        </StackHome.Navigator>
    )
}

function SettingsStack() {
    return (
        <StackSettings.Navigator initialRouteName="Settings">
            <StackSettings.Screen name="Settings" component={SettingsScreen} options={navOptionsHandler} />
            <StackSettings.Screen name="SettingsDetails" component={SettingsDetailsScreen} options={navOptionsHandler} />
        </StackSettings.Navigator>
    )
}


//  previously using stack for a game component.
// Now there is one container for game, controlled with inner state, without naviagion

// function GameStack() {
//     return (
//         <StackGame.Navigator initialRouteName="Game">
//             <StackGame.Screen name="Game" component={StartGameScreen} options={navOptionsHandler} />
//             <StackGame.Screen name="Play" component={PlayGameScreen} options={navOptionsHandler} />
//             <StackGame.Screen name="GameOver" component={GameOverScreen} options={navOptionsHandler} />
//         </StackGame.Navigator>
//     )
// }

function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? IMAGE.HOME_ICON
                            : IMAGE.HOME_NOFILL;
                    } else if (route.name === 'Settings') {
                        iconName = focused ? IMAGE.SETTINGS_ICON : IMAGE.SETTINGS_NOFILL;
                    }

                    return <Image source={iconName} style={{ width: 20, height: 20 }} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'red',
                inactiveTintColor: 'black',
            }}
        >
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Settings" component={SettingsStack} />
        </Tab.Navigator>
    )
}

function DrawerNavigator() {
    return (
        <Drawer.Navigator initialRouteName="MenuTab"
            drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="MenuTab" component={TabNavigator} />
            <Drawer.Screen name="Notifications" component={NotificationsScreen} />
            <Drawer.Screen name="Game" component={GameContainerScreen} />

        </Drawer.Navigator>
    )
}



const AppContainer = ({ screen }) => {
    console.log('AppContainer', screen);
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={screen}>
                <Stack.Screen name="Main" component={DrawerNavigator} options={navOptionsHandler}></Stack.Screen>
                <Stack.Screen name="Login" component={LoginScreen} options={navOptionsHandler}></Stack.Screen>
                <Stack.Screen name="Register" component={RegistrationScreen} options={navOptionsHandler}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppContainer;