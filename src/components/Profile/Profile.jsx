import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    let posts = props.posts
    return (
        <div>
            {console.log(props)}
            <ProfileInfo/>
            <MyPosts posts={posts}
                     postText={props.postText}
                     dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;