import React from 'react'
import {View, StyleSheet} from 'react-native'
import {AppText} from "../components/ui/AppText";
import {AppTextBold} from "../components/ui/AppTextBold";

export const AboutScreen = ({}) => {
    return (
        <View style={styles.center}>
            <AppText>Лучшее приложение для личных заметок.</AppText>
            <AppText>Версия приложения <AppTextBold>1.0.0</AppTextBold></AppText>
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