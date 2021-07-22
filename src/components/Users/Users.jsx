import React from 'react';
import styles from './User/User.module.css';
import userPhoto from '../../assets/images/2_cat.webp';
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    const setNewPages = (t) => {
        pages = [];
        let temp = t * 10 + 1;
        for (let i = temp; i <= (temp + 19); i++) {
            pages.push(i);
        }
    }
    setNewPages(props.usersTen);


    return <div>
        <div className={styles.pageNumbers}>
            <br/>
            <div>
                <table>
                    <tr>
                        <td className={styles.arrows} onClick={(e) => {
                            props.setUsersTen(0)
                        }}>&#8810; </td>
                        <td className={styles.arrows} onClick={(e) => {
                            props.setUsersTen(-1);
                        }}>&#60; </td>

                        {pages.map(p => {
                            return <td onClick={(e) => {
                                props.onPageChoosing(p);
                            }} className={props.currentPage === p && styles.selectedPage}>{p} </td>
                        })}


                        <td className={styles.arrows} onClick={(e) => {
                            props.setUsersTen(1);
                        }}>&#62; </td>
                        <td className={styles.arrows} onClick={(e) => {
                            props.setUsersTen(11)
                        }}>&#8811;</td>
                    </tr>
                </table>
            </div>
        </div>

        {
            props.users.map(u => <div className={styles.users} key={u.id}>
                <div className={styles.item}>
                    <div className={styles.left}>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img
                                    src={u.photos.small != null ? u.photos.small : userPhoto}/>
                            </NavLink>

                        </div>
                        <div className={styles.butt}>
                            {u.followed
                                ? <button onClick={() => {

                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "db7118d4-2a5e-4c1d-acb2-b7d4ddb30f1a"
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(u.id)
                                            }
                                        })

                                }}>Unfollow</button>
                                : <button onClick={() => {

                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "db7118d4-2a5e-4c1d-acb2-b7d4ddb30f1a"
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                        })

                                }}>Follow</button>}
                        </div>
                    </div>
                    <div className={styles.right}>
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