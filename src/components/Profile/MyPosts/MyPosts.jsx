import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from 'react';

const MyPosts = (props) => {

    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text)
        newPostElement.current.value = '';
    }

    return (
        <div className={s.myPosts}>
            <div className={s.title}>
                <h1>My posts</h1>
            </div>
            <div>
                <textarea ref={ newPostElement }></textarea>
                <button onClick={ addPost }>Add post</button>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;