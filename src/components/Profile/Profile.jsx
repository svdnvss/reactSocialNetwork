import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    let state = props.store.getState().profilePage;
    let posts = state.posts;
    let postText = state.postText;

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