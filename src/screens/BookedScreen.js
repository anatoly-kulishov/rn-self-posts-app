import React from 'react'
import {PostList} from "../components/PostList";
import {useDispatch, useSelector} from "react-redux";

export const BookedScreen = ({navigation}) => {

    const openPostHandler = (post) => {
        navigation.navigate('Post', {
            postId: post.id,
            date: post.date,
            booked: post.booked
        })
    }

    const allBookedPosts = useSelector(state => state.post.bookedPosts);

    return <PostList data={allBookedPosts} onOpen={openPostHandler}/>
}