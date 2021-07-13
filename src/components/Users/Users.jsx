import React from 'react';
import styles from './User/User.module.css';
import userPhoto from '../../assets/images/2_cat.webp';

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let newPages = [];
    const setNewPages = (t) => {
        newPages = [];
        let temp = t * 10 + 1;
        for (let i = temp; i <= (temp + 19); i++) {
            newPages.push(i);
            console.log(newPages)
        }
    }
    setNewPages(props.usersTen);


    return <div>
        <div className={styles.pageNumbers}>
            <br/>
            <div>
{/*                {pages.map(p => {
                    return <span onClick={(e) => {
                        props.onPageChoosing(p)
                    }} className={props.currentPage === p && styles.selectedPage}>{p} </span>
                })}*/}
                <table>
                <tr>
                <td className={styles.arrows} onClick={(e) => {
                    props.setUsersTen(0)
                }}>&#8810; </td>
                <td className={styles.arrows} onClick={(e) => {
                    props.setUsersTen(-1);
                }}>&#60; </td>

                    {newPages.map(p => {
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