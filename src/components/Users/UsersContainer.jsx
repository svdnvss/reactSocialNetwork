import {connect} from 'react-redux';
import Users from './Users';
import {
    setCurrentPageAC,
    followAC,
    setUsersAC,
    setUsersCountAC,
    unfollowAC,
    toggleIsFetchingAC,
    setUsersTenAC
} from '../../redux/usersReducer';
import React from 'react';
import * as axios from 'axios';
import loading from '../../assets/images/loading.svg';
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items);
            this.props.setUsersCount(response.data.totalCount);
        })
    }

    onPageChoosing = (p) => {
        this.props.setCurrentPage(p);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items)
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
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   onPageChoosing={this.onPageChoosing}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   unfollowIt={this.props.unfollowIt}
                   followIt={this.props.followIt}
                   setUsersTen={this.settingUsersTen}
                   usersTen={this.props.usersTen}
            /> </>
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        usersTen: state.usersPage.usersTen
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        followIt: (userId) => {
            dispatch(followAC(userId));
        },
        unfollowIt: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setUsersCount: (count) => {
            dispatch(setUsersCountAC(count));
        },
        setCurrentPage: (chosenPage) => {
            dispatch(setCurrentPageAC(chosenPage));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching));
        },
        setUsersTen: (usersTen) => {
            dispatch(setUsersTenAC(usersTen));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)