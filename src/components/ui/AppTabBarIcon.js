import React from 'react';
import {Ionicons} from "@expo/vector-icons";
import {Platform} from "react-native";

export const AppTabBarIcon = (props) => {
    return <Ionicons size={Platform.OS === 'android' ? 21 : 25} style={{marginBottom: -3}} {...props} />;
}
