import React from 'react';
import {View, Text, StyleSheet, Platform} from "react-native";
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native";
import {THEME} from "../theme";
import {HeaderButtons, HeaderButton, Item} from 'react-navigation-header-buttons';
import {Ionicons} from '@expo/vector-icons'
import {MainScreen} from "../screens/MainScreen";
import {AboutScreen} from "../screens/AboutScreen";
import {BookedScreen} from "../screens/BookedScreen";
import {PostScreen} from "../screens/PostScreen";
import {CreateScreen} from "../screens/CreateScreen";

const Stack = createStackNavigator()

const AppHeaderIcon = (props) => (
    <HeaderButton IconComponent={Ionicons}
                  iconSize={25}
                  color={Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR}
                  {...props} />
);

export const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home"
                             headerMode="screen"
                             screenOptions={{
                                 headerStyle: {
                                     backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff'
                                 },
                                 headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR
                             }}>

                <Stack.Screen name="Home"
                              component={MainScreen}
                              options={
                                  {
                                      title: 'Мой блог',
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
                              }/>

                <Stack.Screen name="About" component={AboutScreen}/>

                <Stack.Screen name="Booked"
                              component={BookedScreen}/>

                <Stack.Screen name="Create" component={CreateScreen}/>

                <Stack.Screen name="Post"
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
            </Stack.Navigator>
        </NavigationContainer>
    )
}