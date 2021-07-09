import {connect} from "react-redux";
import Users from "./Users";
import {setCurrentPageAC, followAC, setUsersAC, setUsersCountAC, unfollowAC} from "../../redux/usersReducer";

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

export default connect(mapStateToProps, mapDispatchToProps)(Users)