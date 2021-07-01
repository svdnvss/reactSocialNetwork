import React from 'react';
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState().profilePage;

    let addPost = () => {
        props.store.dispatch(addPostCreator());
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextCreator(text);
        props.store.dispatch(action);
    }

    return <MyPosts onPostChange={ onPostChange }
                     addPost={ addPost }
                     profilePage={state}/>
}

export default MyPostsContainer;