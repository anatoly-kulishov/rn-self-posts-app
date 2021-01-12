import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

export const BookedScreen = ({}) => {
    return (
        <View style={styles.center}>
            <Text>BookedScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
