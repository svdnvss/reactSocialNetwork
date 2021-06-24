import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div className={s.title}>
                <h1>My posts</h1>
            </div>
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                <Post message='Hey wazzup' likesCount='15' />
                <Post message='It is my second post!!' likesCount='20' />
                <Post message='I am learning React.js!' likesCount='12' />
                <Post message='Now I know how to use props!' likesCount='98' />
            </div>
        </div>
    )
}

export default MyPosts;