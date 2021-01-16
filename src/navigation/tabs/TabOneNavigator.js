import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {Platform} from "react-native";
import {THEME} from "../../theme";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../../components/ui/AppHeaderIcon";
import {MainScreen} from "../../screens/MainScreen";
import {PostScreen} from "../../screens/PostScreen";

const TabOneStack = createStackNavigator();

export const TabOneNavigator = () => {
    return (
        <TabOneStack.Navigator
            screenOptions={{
                headerBackTitle: 'Назад',
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff'
                },
                headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR
            }}>
            <TabOneStack.Screen
                name="Main"
                component={MainScreen}
                options={
                    {
                        title: 'Все',
                        headerRight: () => (
                            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                                <Item
                                    title='Take photo'
                                    iconName='ios-camera'
                                    onPress={() => console.log('Press photo')}
                                />
                            </HeaderButtons>
                        ),
                        headerLeft: () => (
                            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                                <Item
                                    title='Take photo'
                                    iconName='ios-menu'
                                    onPress={() => console.log('Press photo')}
                                />
                            </HeaderButtons>
                        ),
                    }
                }
            />
            <TabOneStack.Screen name="Post"
                                component={PostScreen}
                                options={({route}) => (
                                    {
                                        title: `Пост от ${new Date(route.params.date).toLocaleDateString()}`,
                                        headerRight: () => (
                                            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                                                <Item
                                                    title='Booked'
                                                    iconName={route.params.booked ? 'ios-star' : 'ios-star-outline'}
                                                    onPress={() => console.log('Press Booked')}
                                                />
                                            </HeaderButtons>
                                        ),
                                    }
                                )}/>
        </TabOneStack.Navigator>
    );
}