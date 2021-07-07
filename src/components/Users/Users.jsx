import React from "react";
import s from "./User/User.module.css";
import * as axios from "axios";
import userPhoto from '../../assets/images/2_cat.webp'

const Users = (props) => {
    let showUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items)
            })
        }
    }

    /*if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    isFollowed: true,
                    fullName: 'Evelina',
                    profilePicture: 'http://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
                    status: 'Hey I\'m passing my driving exams!',
                    location: {city: 'Ufa', country: 'Russia'}
                },
                {
                    id: 2,
                    isFollowed: false,
                    fullName: 'Izyum',
                    profilePicture: 'http://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
                    status: 'I\'m eating my whiskas!!!',
                    location: {city: 'Hawaii', country: 'USA'}
                },
                {
                    id: 3,
                    isFollowed: true,
                    fullName: 'Barsik',
                    profilePicture: 'http://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
                    status: 'I\'m walking on the street :)',
                    location: {city: 'Belebey', country: 'Russia'}
                }
            ]
        )
    }*/

    return <div>
        <button onClick={showUsers}>Show users</button>
        {
            props.users.map(u => <div className={s.users} key={u.id}>
                <div className={s.item}>
                    <div className={s.left}>
                        <div>
                            <img
                                src={u.photos.small != null ? u.photos.small : userPhoto}/>
                        </div>
                        <div className={s.butt}>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollowIt(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.followIt(u.id)
                                }}>Follow</button>}
                        </div>
                    </div>
                    <div className={s.right}>
                        <div>
                            <div>
                                <h1>{u.name}</h1>
                            </div>
                            <div>
                                <h4>{u.status}</h4>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h3>
                                    u.location.country
                                </h3>
                            </div>
                            <div>
                                <h3>
                                    u.location.city
                                </h3>
                            </div>
                        </div>

                    </div>
                </div>
            </div>)
        }
    </div>
}

export default Users;