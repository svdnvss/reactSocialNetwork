import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer from './profileReducer';
import messageReducer from './messagesReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import popItReducer from './popItReducer';
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    popIt: popItReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;