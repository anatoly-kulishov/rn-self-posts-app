import React, {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {PostScreen} from "../screens/PostScreen";
import {AppHeaderIcon} from "./ui/AppHeaderIcon";
import {toggleBooked} from "../store/actions/post";

export const StackPostScreen = (Component) => {
    return (
        <Component.Screen name="Post"
                          component={PostScreen}
                          options={({route}) => ({
                                  title: `Пост от ${new Date(route.params.date).toLocaleDateString()}`,
                                  headerRight: () => (
                                      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                                          <Item title='Booked'
                                                iconName={route.params.booked ? 'ios-star' : 'ios-star-outline'}
                                                onPress={() => console.log(route.params)}
                                          />
                                      </HeaderButtons>
                                  ),
                              }
                          )}/>
    )
}
