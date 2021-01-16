import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {Platform} from "react-native";
import {THEME} from "../../theme";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../../components/ui/AppHeaderIcon";
import {BookedScreen} from "../../screens/BookedScreen";
import {PostScreen} from "../../screens/PostScreen";

const TabTwoStack = createStackNavigator();

export const TabTwoNavigator = () => {
    return (
        <TabTwoStack.Navigator
            screenOptions={{
                headerBackTitle: 'Назад',
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff'
                },
                headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR
            }}>
            <TabTwoStack.Screen
                name="Booked"
                component={BookedScreen}
                options={
                    {
                        title: 'Избранное',
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
            <TabTwoStack.Screen name="Post"
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
        </TabTwoStack.Navigator>
    );
}