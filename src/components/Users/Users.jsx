import React from "react";
import styles from "./User/User.module.css";
import * as axios from "axios";
import userPhoto from '../../assets/images/2_cat.webp'

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setUsersCount(response.data.totalCount)
        })
    }

    onPageChoosing = (p) => {
        this.props.setCurrentPage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        console.log(pages)
        debugger
        return <div>
            <div className={styles.pageNumbers}>
                <br/>
                <div>
                    {pages.map(p => {
                        return <span onClick={(e) => {
                            this.onPageChoosing(p)
                        }} className={this.props.currentPage === p && styles.selectedPage}>{p} </span>
                    })}
                </div>
            </div>

            {
                this.props.users.map(u => <div className={styles.users} key={u.id}>
                    <div className={styles.item}>
                        <div className={styles.left}>
                            <div>
                                <img
                                    src={u.photos.small != null ? u.photos.small : userPhoto}/>
                            </div>
                            <div className={styles.butt}>
                                {u.followed
                                    ? <button onClick={() => {
                                        this.props.unfollowIt(u.id)
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        this.props.followIt(u.id)
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
}

export default Users;