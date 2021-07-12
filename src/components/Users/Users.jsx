import React from "react";
import styles from "./User/User.module.css";
import userPhoto from '../../assets/images/2_cat.webp'

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div className={styles.pageNumbers}>
            <br/>
            <div>
                {pages.map(p => {
                    return <span onClick={(e) => {
                        props.onPageChoosing(p)
                    }} className={props.currentPage === p && styles.selectedPage}>{p} </span>
                })}
            </div>
        </div>

        {
            props.users.map(u => <div className={styles.users} key={u.id}>
                <div className={styles.item}>
                    <div className={styles.left}>
                        <div>
                            <img
                                src={u.photos.small != null ? u.photos.small : userPhoto}/>
                        </div>
                        <div className={styles.butt}>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollowIt(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.followIt(u.id)
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