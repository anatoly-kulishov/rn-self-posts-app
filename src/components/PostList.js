import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {AppTextBold} from "./ui/AppTextBold";
import {Post} from "./Post";

export const PostList = ({data = [], onOpen}) => {

    if (!data.length) {
        return (
            <View style={styles.noItemsWrapper}>
                <AppTextBold style={styles.noItemsText}>Постов пока нет</AppTextBold>
            </View>
        )
    }

    return (
        <View style={styles.wrapper}>
            <FlatList
                data={data}
                keyExtractor={post => post.id.toString()}
                renderItem={({item}) => <Post post={item} onOpen={onOpen}/>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    },
    noItemsWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    noItemsText: {
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 10,
    }
})