import {authAPI} from "../api/api";

const SET_USER_AUTH_DATA = 'SET_USER_AUTH_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: true,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_AUTH_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true

            }
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        default:
            return state;
    }
}

export const setUserAuthData = (userId, email, login) => ({type: SET_USER_AUTH_DATA, data: {userId, email, login}})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const makeAuth = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));

        authAPI.getAuth()
            .then(response => {
                dispatch(toggleIsFetching(false));
                if (response.resultCode === 0) {
                    let {id, email, login} = response.data;
                    dispatch(setUserAuthData(id, email, login));
                }
            })
    }
}

export default authReducer;