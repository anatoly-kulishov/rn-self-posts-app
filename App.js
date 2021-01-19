import React, {useState} from 'react'
import {Provider} from 'react-redux';
import AppLoading from 'expo-app-loading';
import {StatusBar} from "expo-status-bar";
import store from './src/store';
import {bootstrap} from './src/bootstrap';
import {THEME} from "./src/theme";
import {AppNavigation} from "./src/navigation/AppNavigation";

export default function App() {
    const [isReady, setIsReady] = useState(false)

    if (!isReady) {
        return (
            <AppLoading
                startAsync={bootstrap}
                onFinish={() => setIsReady(true)}
                onError={err => console.log(err)}
            />
        )
    }

    return (
        <Provider store={store}>
            <AppNavigation/>
            <StatusBar backgroundColor={THEME.MAIN_COLOR}/>
        </Provider>
    )
}