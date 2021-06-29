import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    let posts = props.posts
    let postText = props.postText

    return (
        <div>
            {console.log(props)}
            <ProfileInfo/>
            <MyPosts posts={posts}
                     postText={postText}
                     dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;