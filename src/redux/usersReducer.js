import {usersAPI} from "../api/api";

const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SHOW_MORE = 'SHOW_MORE';
const SET_USERS_COUNT = 'SET_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_USERS_TEN = 'SET_USERS_TEN';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';

let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: true,
    usersTen: 0,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }

        case SET_USERS:
            return {...state, users: action.users}

        case SET_USERS_COUNT:
            return {...state, totalUsersCount: action.count}

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.chosenPage}

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        case SET_USERS_TEN:
            return {...state, usersTen: action.newUsersTen}

        case FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)

            }


        default:
            return state;
    }
}

export const setUsers = (users) => ({type: SET_USERS, users})
export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const showMore = () => ({type: SHOW_MORE})
export const setUsersCount = (count) => ({type: SET_USERS_COUNT, count})
export const setCurrentPage = (chosenPage) => ({type: SET_CURRENT_PAGE, chosenPage})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingInProgress = (isFetching, userId) => ({type: FOLLOWING_IN_PROGRESS, isFetching, userId})
export const setUsersTen = (newUsersTen) => ({type: SET_USERS_TEN, newUsersTen})

export const getUsers = (currentPage, pageSize) => {

    return (dispatch) => {

        dispatch(toggleIsFetching(true));

        usersAPI.getUsers(currentPage, pageSize).then(response => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(response.items));
            dispatch(setUsersCount(response.totalCount));
        })

    }
}

export const follow = (userId) => {

    return (dispatch) => {

        dispatch(toggleFollowingInProgress(true, userId))
        usersAPI.follow(userId)
            .then(response => {
                if (response === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingInProgress(false, userId))
            })
    }
}

export const unfollow = (userId) => {

    return (dispatch) => {

        dispatch(toggleFollowingInProgress(true, userId))
        usersAPI.unfollow(userId)
            .then(response => {
                if (response === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleFollowingInProgress(false, userId))
            })
    }
}

export default usersReducer;