import React, {useCallback, useLayoutEffect} from 'react'
import {View, StyleSheet, Image, ScrollView, Alert} from 'react-native'
import {THEME} from "../theme";
import {AppButton} from "../components/ui/AppButton";
import {AppText} from "../components/ui/AppText";
import {useDispatch, useSelector} from "react-redux";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../components/ui/AppHeaderIcon";
import {toggleBooked, removePost} from '../store/actions/post'

export const PostScreen = ({navigation, route}) => {
    const dispatch = useDispatch();
    const postId = route.params.postId;
    const post = useSelector(state => state.post.allPosts.find(p => p.id === postId));
    const booked = useSelector(state => state.post.bookedPosts.some(post => post.id === postId));

    const toggleHandler = useCallback(() => {
        dispatch(toggleBooked(post))
    }, [dispatch, post])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                    <Item title='Booked'
                          iconName={booked ? 'ios-star' : 'ios-star-outline'}
                          onPress={toggleHandler}/>
                </HeaderButtons>
            ),
        });
    }, [booked]);

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
                    onPress() {
                        navigation.navigate('Main')
                        dispatch(removePost(postId))
                    }
                }
            ],
            {cancelable: false}
        )
    }

    if (!post) {
        return null
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
