import {connect} from "react-redux";
import Users from "./Users";
import {setCurrentPageAC, followAC, setUsersAC, setUsersCountAC, unfollowAC} from "../../redux/usersReducer";
import React from "react";
import * as axios from "axios";

class UsersContainer extends React.Component {
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
        return <Users totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               onPageChoosing={this.onPageChoosing}
               currentPage={this.props.currentPage}
               users={this.props.users}
               unfollowIt={this.props.unfollowIt}
               followIt={this.props.followIt}
        />
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)