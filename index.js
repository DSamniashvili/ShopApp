/**
 * @format
 */
import 'react-native-gesture-handler';
import { name as appName } from './app.json';
import { AppRegistry, View } from 'react-native';
import React from 'react';
import App from './src/App';

import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
const store = configureStore();

const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
)
AppRegistry.registerComponent(appName, () => Root);
