import React from 'react'
import {View, StyleSheet} from 'react-native'
import {AppTextBold} from "../components/ui/AppTextBold";

export const CreateScreen = ({}) => {
    return (
        <View style={styles.center}>
            <AppTextBold>Создать пост</AppTextBold>
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
