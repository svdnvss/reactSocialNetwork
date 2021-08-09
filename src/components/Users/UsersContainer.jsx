import {connect} from 'react-redux';
import Users from './Users';
import {
    setCurrentPage,
    follow,
    unfollow,
    setUsersTen,
    toggleFollowingInProgress,
    getUsers
} from '../../redux/usersReducer';
import React from 'react';
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChoosing = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
        this.props.setCurrentPage(pageNumber);
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
                   followingInProgress={this.props.followingInProgress}
            /></ >
    }
}


const mapStateToProps = (state) => {
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

export default compose(
    connect(mapStateToProps,
        {follow, unfollow, setCurrentPage, setUsersTen, toggleFollowingInProgress, getUsers}),
    withAuthRedirect
)(UsersContainer)