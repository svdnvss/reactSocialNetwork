import {connect} from 'react-redux';
import Users from './Users';
import {
    setCurrentPage,
    follow,
    setUsers,
    setUsersCount,
    unfollow,
    toggleIsFetching,
    setUsersTen,
    toggleFollowingInProgress
} from '../../redux/usersReducer';
import React from 'react';
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.items);
            this.props.setUsersCount(response.totalCount);
        })
    }

    onPageChoosing = (p) => {
        this.props.setCurrentPage(p);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(p, this.props.pageSize).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.items)
        });
    }

    settingUsersTen = (t) => {
        if (t === -1 && this.props.usersTen === 0) {
            this.props.setUsersTen(this.props.usersTen);
        } else if (t === 0) {
            this.props.setUsersTen(0)
        } else if (t === 11) {
            this.props.setUsersTen(130)
        } else if (t === 1 && this.props.usersTen === 130) {
            this.props.setUsersTen(this.props.usersTen);
        } else {
            this.props.setUsersTen(this.props.usersTen + t);
        }
    }

    render() {
        return <>
        {this.props.isFetching ? <Preloader/> : null}
        <Users totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               onPageChoosing={this.onPageChoosing}
               currentPage={this.props.currentPage}
               users={this.props.users}
               unfollow={this.props.unfollow}
               follow={this.props.follow}
               setUsersTen={this.settingUsersTen}
               usersTen={this.props.usersTen}
               toggleFollowingInProgress={this.props.toggleFollowingInProgress}
               followingInProgress={this.props.followingInProgress}
                   /> </ >
               }
        }


        const mapStateToProps=(state) => {
        return {
            users: state.usersPage.users,
            totalUsersCount: state.usersPage.totalUsersCount,
            pageSize: state.usersPage.pageSize,
            currentPage: state.usersPage.currentPage,
            isFetching: state.usersPage.isFetching,
            usersTen: state.usersPage.usersTen,
            followingInProgress: state.usersPage.followingInProgress
        }
        }

        export default connect(mapStateToProps,
        {follow, unfollow, setUsers, setUsersCount, setCurrentPage, toggleIsFetching, setUsersTen,
        toggleFollowingInProgress}
        )(UsersContainer)