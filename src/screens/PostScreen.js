import React, {useEffect, useCallback} from 'react'
import {View, StyleSheet, Image, ScrollView, Alert, Button} from 'react-native'
import {DATA} from "../data";
import {THEME} from "../theme";
import {AppButton} from "../components/ui/AppButton";
import {AppText} from "../components/ui/AppText";
import {useDispatch, useSelector} from "react-redux";
import {toggleBooked} from "../store/actions/post";

export const PostScreen = ({navigation, route}) => {
    const dispatch = useDispatch()
    const postId = route.params.postId
    const post = DATA.find(p => p.id === postId)

    // const booked = useSelector(state => state.post.bookedPosts.some(post => post.id === postId))

    // useEffect(() => {
    //     navigation.setParams({booked})
    // }, [booked])

    const toggleHandler = useCallback(() => {
        dispatch(toggleBooked(postId))
    }, [dispatch, postId])

    // useEffect(() => {
    //     navigation.setOptions(() => console.log('useEffect'))
    // }, [toggleHandler])

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
            <View style={styles.container}>
                <View style={styles.textWrap}>
                    <AppText style={styles.title}>{post.text}</AppText>
                </View>
                <AppButton color={THEME.DANGER_COLOR}
                           onPress={removeHandler}>Удалить пост</AppButton>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
    image: {
        width: '100%',
        height: 200
    },
    textWrap: {
        marginVertical: 20
    }
})
