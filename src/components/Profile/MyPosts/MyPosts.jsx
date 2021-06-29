import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from 'react';
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profileReducer";

const MyPosts = (props) => {
    let postsElements =
        props.posts.slice(0).reverse().map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextCreator(text));
    }

    return (
        <div className={s.myPosts}>
            <div className={s.title}>
                <h1>My posts</h1>
            </div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.postText}></textarea>
                <button onClick={addPost}>Add post</button>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;