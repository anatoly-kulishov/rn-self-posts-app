import * as React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {navigationScreenOptions} from "../navigationOptions";
import {CreateScreen} from "../../screens/CreateScreen";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../../components/ui/AppHeaderIcon";

const CreateNavigationStack = createStackNavigator();

export const CreateNavigation = ({navigation}) => {
    return (
        <CreateNavigationStack.Navigator
            screenOptions={navigationScreenOptions}>
            <CreateNavigationStack.Screen
                name="Create"
                component={CreateScreen}
                options={
                    {
                        title: 'Создать пост',
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
        </CreateNavigationStack.Navigator>
    )
}