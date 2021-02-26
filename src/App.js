import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
const store = configureStore();
import firebase from 'firebase';

import AppContainer from './AppContainer';
import { View, Image, SafeAreaView } from 'react-native';
import { IMAGE } from './constants/image-constants';

import { useDispatch, useSelector } from "react-redux";
import { onLoginSuccessAction } from './actions/index';


const App = () => {
    const stateUser = useSelector(state => state.user.user);
    const [loggedIn, setLoggedIn] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
        if (firebase.apps.length === 0) {
            firebase.initializeApp({
                apiKey: "AIzaSyCUBfWLjI6qeMq3C8QSZnKmCNCbPgB0tE0",
                authDomain: "auth-albums-dcc75.firebaseapp.com",
                projectId: "auth-albums-dcc75",
                storageBucket: "auth-albums-dcc75.appspot.com",
                messagingSenderId: "19709753648",
                appId: "1:19709753648:web:6b471486703a7ade59f0f5"
            });
        }

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setLoggedIn('true');
                setIsLoading(false);
                if (!stateUser || stateUser.length === 0) {
                    onLoginSuccessAction(dispatch, user);
                }

            } else {
                setLoggedIn('false');
                setIsLoading(false);
            }
        })

    }, []);


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                {
                    isLoading ?
                        <View style={{ flex: 1, }}>
                            <Image
                                style={{ width: '100%', height: '100%' }}
                                source={IMAGE.LOGO}
                            />
                        </View> :
                        null
                }
                {
                    loggedIn === 'true' ?
                        <AppContainer screen={'Main'} /> :
                        null
                }
                {
                    loggedIn === 'false' ?
                        <AppContainer screen={'Login'} /> :
                        null
                }
            </View>
        </SafeAreaView>
    );
}

export default App;