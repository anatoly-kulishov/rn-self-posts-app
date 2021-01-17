import * as React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {navigationScreenOptions} from "../navigationOptions";
import {AboutScreen} from "../../screens/AboutScreen";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../../components/ui/AppHeaderIcon";

const AboutNavigationStack = createStackNavigator();

export const AboutNavigation = ({navigation}) => {
    return (
        <AboutNavigationStack.Navigator
            screenOptions={navigationScreenOptions}>
            <AboutNavigationStack.Screen
                name="About"
                component={AboutScreen}
                options={
                    {
                        title: 'О приложении',
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
        </AboutNavigationStack.Navigator>
    )
}