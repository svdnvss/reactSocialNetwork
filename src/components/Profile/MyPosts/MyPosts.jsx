import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from 'react';

const MyPosts = (props) => {

    let postsElements =
        props.posts.slice(0).reverse().map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({ type: 'ADD-POST' });
    }

    let newPostText = () => {
        let text = newPostElement.current.value;
        props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', text: text });
    }

    return (
        <div className={s.myPosts}>
            <div className={s.title}>
                <h1>My posts</h1>
            </div>
            <div>
                <textarea onChange={newPostText} ref={newPostElement} value={props.postText}></textarea>
                <button onClick={addPost}>Add post</button>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;