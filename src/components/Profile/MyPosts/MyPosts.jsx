import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from 'react';

const MyPosts = (props) => {
    let postsElements =
        props.profilePage.posts.slice(0).reverse().map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.onPostChange(text);
    }

    return (
        <div className={s.myPosts}>
            <div className={s.title}>
                <h1>My posts</h1>
            </div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.profilePage.postText}></textarea>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;