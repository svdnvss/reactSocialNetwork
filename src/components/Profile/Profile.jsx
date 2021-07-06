import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            {console.log(props)}
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;