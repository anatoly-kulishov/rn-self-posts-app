import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {navigationScreenOptions} from "../navigationOptions";
import {AppHeaderIcon} from "../../components/ui/AppHeaderIcon";
import {MainScreen} from "../../screens/MainScreen";
import {PostScreen} from "../../screens/PostScreen";

const TabOneStack = createStackNavigator();

export const TabOnePostNavigation = ({navigation, route}) => {
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
                                    onPress={() => navigation.navigate('Новый пост')}
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
            <TabOneStack.Screen name="Post"
                              component={PostScreen}
                              options={({route}) => ({
                                      title: `Пост от ${new Date(route.params.date).toLocaleDateString()}`,
                                  }
                              )}/>
        </TabOneStack.Navigator>
    );
}