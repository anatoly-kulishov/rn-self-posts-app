import * as React from 'react';
import {Platform} from "react-native";
import {THEME} from "../theme";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from "@react-navigation/native";
import {AppTabBarIcon} from "../components/ui/AppTabBarIcon";
import {TabOneNavigator} from "./tabs/TabOneNavigator";
import {TabTwoNavigator} from "./tabs/TabTwoNavigator";

const BottomTab = Platform.OS === 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator();

export const AppNavigation = () => {
    return (
        <NavigationContainer>
            <BottomTab.Navigator
                shifting={true}
                barStyle={{backgroundColor: THEME.MAIN_COLOR}}
                tabBarOptions={{
                    activeTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
                    labelStyle: {margin: 3},
                }}>
                <BottomTab.Screen
                    name="Main"
                    component={TabOneNavigator}
                    options={{
                        tabBarLabel: 'Все',
                        tabBarIcon: ({color}) => <AppTabBarIcon name="ios-albums" color={color}/>,
                    }}
                />
                <BottomTab.Screen
                    name="Booked"
                    component={TabTwoNavigator}
                    options={{
                        tabBarLabel: 'Избранное',
                        tabBarIcon: ({color}) => <AppTabBarIcon name="ios-star" color={color}/>,
                    }}
                />
            </BottomTab.Navigator>
        </NavigationContainer>
    )
}


