import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {navigationScreenOptions} from "../navigationOptions";
import {AppHeaderIcon} from "../../components/ui/AppHeaderIcon";
import {BookedScreen} from "../../screens/BookedScreen";
import {PostScreen} from "../../screens/PostScreen";

const TabTwoStack = createStackNavigator();

export const TabTwoPostNavigation = ({navigation, route}) => {
    return (
        <TabTwoStack.Navigator
            screenOptions={navigationScreenOptions}>
            <TabTwoStack.Screen
                name="Booked"
                component={BookedScreen}
                options={
                    {
                        title: 'Избранное',
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
            <TabTwoStack.Screen name="Post"
                                component={PostScreen}
                                options={({route}) => ({
                                        title: `Пост от ${new Date(route.params.date).toLocaleDateString()}`,
                                    }
                                )}/>
        </TabTwoStack.Navigator>
    );
}