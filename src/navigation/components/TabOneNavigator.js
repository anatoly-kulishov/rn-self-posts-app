import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {navigationScreenOptions} from "../navigationOptions";
import {StackPostScreen} from "../../components/StackPostScreen";
import {AppHeaderIcon} from "../../components/ui/AppHeaderIcon";
import {MainScreen} from "../../screens/MainScreen";

const TabOneStack = createStackNavigator();

export const TabOneNavigator = ({navigation}) => {
    return (
        <TabOneStack.Navigator
            screenOptions={navigationScreenOptions}>
            <TabOneStack.Screen
                name="Main"
                component={MainScreen}
                options={
                    {
                        title: 'Главная',
                        headerRight: () => (
                            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                                <Item
                                    title='Take photo'
                                    iconName='ios-camera'
                                    onPress={() => navigation.navigate('Create')}
                                />
                            </HeaderButtons>
                        ),
                        headerLeft: () => (
                            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                                <Item
                                    title='Drawer'
                                    iconName='ios-menu'
                                    onPress={() => navigation.toggleDrawer()}
                                />
                            </HeaderButtons>
                        ),
                    }
                }
            />
            {StackPostScreen(TabOneStack)}
        </TabOneStack.Navigator>
    );
}