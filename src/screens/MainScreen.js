import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {PostList} from "../components/PostList";
import {loadPosts} from "../store/actions/post";
import {AppLoader} from "../components/ui/AppLoader";

export const MainScreen = ({navigation}) => {

    const openPostHandler = (post) => {
        navigation.navigate('Post', {
            postId: post.id,
            date: post.date,
            booked: post.booked
        })
    }

    useEffect(() => {
        dispatch(loadPosts())
    }, [])

    const dispatch = useDispatch();
    const allPosts = useSelector(state => state.post.allPosts);
    const loading = useSelector(state => state.post.loading)

    if(loading) {
        return <AppLoader/>
    }


    return <PostList data={allPosts} onOpen={openPostHandler}/>
}