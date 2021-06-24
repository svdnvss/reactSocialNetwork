import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"/>
            <div>
                <span> { props.likesCount } Likes</span>
                <h2> { props.message } </h2>
            </div>
        </div>
    )
}

export default Post;