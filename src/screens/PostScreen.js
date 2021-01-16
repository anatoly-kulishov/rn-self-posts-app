import React from 'react'
import {View, StyleSheet, Image, ScrollView, Alert} from 'react-native'
import {DATA} from "../data";
import {THEME} from "../theme";
import {AppButton} from "../components/ui/AppButton";
import {AppText} from "../components/ui/AppText";

export const PostScreen = ({navigation, route}) => {
    const postId = route.params.postId
    const post = DATA.find(p => p.id === postId)

    const removeHandler = () => {
        Alert.alert(
            "Удаление поста",
            `Вы уверены, что хотите удалить пост ?`,
            [
                {
                    text: "Отмена",
                    style: "cancel"
                },
                {
                    text: "Удалить",
                    style: "destructive",
                    onPress: async () => {
                        console.log('Deleted')
                    }
                }
            ],
            {cancelable: false}
        )
    }

    return (
        <ScrollView>
            <Image style={styles.image}
                   source={{uri: post.img}}/>
            <View style={styles.textWrap}>
                <AppText style={styles.title}>{post.text}</AppText>
            </View>
            <AppButton color={THEME.DANGER_COLOR}
                       onPress={removeHandler}>Удалить</AppButton>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    textWrap: {
        padding: 10
    }
})
