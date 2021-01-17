import * as React from 'react';
import {THEME} from "../../theme";
import {Platform} from "react-native";
import {TabOnePostNavigation} from "./TabOnePostNavigation";
import {AppTabBarIcon} from "../../components/ui/AppTabBarIcon";
import {TabTwoPostNavigation} from "./TabTwoPostNavigation";
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
                component={TabOnePostNavigation}
                options={{
                    tabBarLabel: 'Все посты',
                    tabBarIcon: ({color}) => <AppTabBarIcon name="ios-albums" color={color}/>,
                }}
            />
            <BottomTab.Screen
                name="Booked"
                component={TabTwoPostNavigation}
                options={{
                    tabBarLabel: 'Избранное',
                    tabBarIcon: ({color}) => <AppTabBarIcon name="ios-star" color={color}/>,
                }}
            />
        </BottomTab.Navigator>
    )
}