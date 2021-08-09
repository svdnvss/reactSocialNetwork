import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus/ProfileStatus'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.mainDiv}>
            {/*<div className={s.image}>
                <img src="http://pm1.narvii.com/6857/d1562e40a2f1d498db066cb792e842e1de58c9b2_00.jpg"/>
            </div>*/}
            <div className={s.descriptionBlock}>
                <div className={s.profilePhoto}>
                    {props.profile.photos.large === null ? <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png"/>
                    :                    <img src={props.profile.photos.large}/>}
                </div>
                <div className={s.profileInfo}>
                    <div className={s.mainInfo}>
                        <h1>&nbsp; {props.profile.fullName}</h1>
                        <ProfileStatus status={'hiiii'}/>
                        <h3>&nbsp; {props.profile.aboutMe}</h3>
                        {props.profile.lookingForAJob === true
                            ? <h4   >&nbsp; Needs job: <img src="https://static.vecteezy.com/system/resources/previews/001/200/261/original/check-png.png"/></h4>
                            : <h4>&nbsp; Needs job: <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Red_x.svg"/></h4>
                        }
                        <p>&nbsp; {props.profile.lookingForAJobDescription}</p>
                    </div>
                    <div className={s.contacts}>
                        <h2>Contacts:</h2>
                        {props.profile.contacts.facebook !== null ?
                            <p><img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"/>
                                &nbsp;{props.profile.contacts.facebook}</p> : null
                        }
                        {props.profile.contacts.website !== null ?
                            <p><img
                                src="https://img.icons8.com/ios/452/domain.png"/>
                                &nbsp;{props.profile.contacts.website}</p> : null
                        }
                        {props.profile.contacts.vk !== null ?
                            <p><img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/VK.com-logo.svg/2048px-VK.com-logo.svg.png"/>
                                &nbsp;{props.profile.contacts.vk}</p> : null
                        }
                        {props.profile.contacts.twitter !== null ?
                            <p><img
                                src="https://www.createchallenge.org/images/logo-twitter.png/@@images/b588afe1-9051-46e9-b16c-09ba486fcc44.png"/>
                                &nbsp;{props.profile.contacts.twitter}</p> : null
                        }
                        {props.profile.contacts.instagram !== null ?
                            <p><img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"/>
                                &nbsp;{props.profile.contacts.instagram}</p> : null
                        }
                        {props.profile.contacts.youtube !== null ?
                            <p><img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1280px-YouTube_full-color_icon_%282017%29.svg.png"/>
                                &nbsp;{props.profile.contacts.youtube}</p> : null
                        }
                        {props.profile.contacts.github !== null ?
                            <p><img
                                src="https://image.flaticon.com/icons/png/512/25/25231.png"/>
                                &nbsp;{props.profile.contacts.github}</p> : null
                        }
                        {props.profile.contacts.mainLink !== null ?
                            <p><img
                                src="https://cdn.iconscout.com/icon/free/png-256/webpage-1896684-1606144.png"/>
                                &nbsp;{props.profile.contacts.mainLink}</p> : null
                        }

                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;