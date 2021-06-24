import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div className={s.image}>
                <img src="http://pm1.narvii.com/6857/d1562e40a2f1d498db066cb792e842e1de58c9b2_00.jpg"/>
            </div>
            <div>
                Profile Image / Decription
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;