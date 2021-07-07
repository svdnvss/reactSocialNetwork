const SET_USERS = 'SET-USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SHOW_MORE = 'SHOW-MORE';

let initialState = {
    users: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, isFollowed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, isFollowed: false}
                    }
                    return u;
                })
            }

        case SET_USERS:
            return {...state, users: [ ...state.users, ...action.users ]}

        default:
            return state;
    }
}

export const setUsersAC = (users) => ({type: SET_USERS, users})
export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const showMoreAC = () => ({type: SHOW_MORE})


export default usersReducer;