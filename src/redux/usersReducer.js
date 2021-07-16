const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SHOW_MORE = 'SHOW_MORE';
const SET_USERS_COUNT = 'SET_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_USERS_TEN = 'SET_USERS_TEN';

let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: true,
    usersTen: 0
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


        default:
            return state;
    }
}

export const setUsers = (users) => ({type: SET_USERS, users})
export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const showMore = () => ({type: SHOW_MORE})
export const setUsersCount = (count) => ({type: SET_USERS_COUNT, count})
export const setCurrentPage = (chosenPage) => ({type: SET_CURRENT_PAGE, chosenPage})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const setUsersTen = (newUsersTen) => ({type: SET_USERS_TEN, newUsersTen})



export default usersReducer;