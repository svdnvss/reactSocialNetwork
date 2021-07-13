import {combineReducers, createStore} from 'redux';
import profileReducer from './profileReducer';
import messageReducer from './messagesReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer
})

let store = createStore(reducers);

export default store;