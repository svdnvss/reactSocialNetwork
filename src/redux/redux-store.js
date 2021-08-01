import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer from './profileReducer';
import messageReducer from './messagesReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;