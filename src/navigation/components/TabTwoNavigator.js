import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {navigationScreenOptions} from "../navigationOptions";
import {StackPostScreen} from "../../components/StackPostScreen";
import {AppHeaderIcon} from "../../components/ui/AppHeaderIcon";
import {BookedScreen} from "../../screens/BookedScreen";

const TabTwoStack = createStackNavigator();

export const TabTwoNavigator = ({navigation}) => {
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
            {StackPostScreen(TabTwoStack)}
        </TabTwoStack.Navigator>
    );
}