import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons";
import {THEME} from "../theme";
import {PostNavigation} from "./components/PostNavigation";
import {AboutNavigation} from "./components/AboutNavigation";
import {CreateNavigation} from "./components/CreateNavigation";

const Drawer = createDrawerNavigator();

export const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerStyle={{paddingTop: 5}}
                drawerContentOptions={{
                    activeTintColor: THEME.MAIN_COLOR,
                    labelStyle: {fontFamily: 'open-bold',}
                }}>
                <Drawer.Screen name="Главная"
                               component={PostNavigation}
                               options={{
                                   drawerIcon: ({focused, size}) => (
                                       <Ionicons name="ios-home"
                                                 size={size}
                                                 color={focused ? THEME.MAIN_COLOR : '#000'}
                                       />
                                   ),
                               }}/>

                <Drawer.Screen name="О приложении"
                               component={AboutNavigation}
                               options={{
                                   drawerIcon: ({focused, size}) => (
                                       <Ionicons name="ios-information-circle-sharp"
                                                 size={size}
                                                 color={focused ? THEME.MAIN_COLOR : '#000'}
                                       />
                                   ),
                               }}/>

                <Drawer.Screen name="Новый пост"
                               component={CreateNavigation}
                               options={{
                                   drawerIcon: ({focused, size}) => (
                                       <Ionicons name="ios-create"
                                                 size={size}
                                                 color={focused ? THEME.MAIN_COLOR : '#000'}
                                       />
                                   ),
                               }}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}



