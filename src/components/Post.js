import React from 'react';
import {View, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import {AppText} from "./ui/AppText";

export const Post = ({post, onOpen}) => {
    return (
        <TouchableOpacity activeOpacity={.7} onPress={() => onOpen(post)}>
            <View style={styles.post}>
                <ImageBackground style={styles.image} source={{uri: post.img}}>
                    <View style={styles.textWrap}>
                        <AppText style={styles.title}>{new Date(post.date).toLocaleDateString()}</AppText>
                    </View>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    post: {
        marginBottom: 15,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200
    },
    textWrap: {
        backgroundColor: 'rgba(0,0,0, .5)',
        paddingVertical: 5,
        alignItems: 'center',
        width: '100%'
    },
    title: {
        color: '#fff'
    }
});