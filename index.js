/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable quotes */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import rootReducder from './src/redux/reducers';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const render = () => {
    let store = createStore(rootReducder, {}, applyMiddleware(thunk));

    useEffect(() => {
        console.log("Mounted", store.getState());

        const getData = async () => {
            try {
                const data = await AsyncStorage.getItem('DATA');
                store = createStore(rootReducder, data != null ? JSON.parse(data) : {}, applyMiddleware(thunk));
            } catch (e) { }
        };
        getData();

        return () => {
            console.log("Unmounted", store.getState());

            const storeData = async () => {
                try {
                    await AsyncStorage.setItem('DATA', JSON.stringify(store.getState()))
                } catch (e) { }
            }
            storeData();
        }
    }, []);

    return <Provider store={store}>
        <App />
    </Provider>;
}

AppRegistry.registerComponent(appName, () => render);
