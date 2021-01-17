import * as React from 'react';
import {THEME} from "../../theme";
import {Platform} from "react-native";
import {TabOneNavigator} from "./TabOneNavigator";
import {AppTabBarIcon} from "../../components/ui/AppTabBarIcon";
import {TabTwoNavigator} from "./TabTwoNavigator";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const BottomTab = Platform.OS === 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator();

export const PostNavigation = () => {
    return (
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
                    tabBarLabel: 'Все посты',
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
    )
}