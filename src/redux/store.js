import messageReducer from "./messagesReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hey wazzup', likesCount: 15},
                {id: 2, message: 'It is my second post!!', likesCount: 20},
                {id: 3, message: 'I am learning React.js!', likesCount: 12},
                {id: 4, message: 'Now I know how to use props!', likesCount: 98},
            ],
            postText: ''
        },
        messagesPage: {
            dialogues: [
                {id: 1, name: 'Evelina'},
                {id: 2, name: 'Izyum'},
                {id: 3, name: 'Barsik'},
                {id: 4, name: 'Bogdan'},
                {id: 5, name: 'Ilyas'},
                {id: 6, name: 'Busya'},
            ],
            messages: [
                {id: 1, text: 'Hello!'},
                {id: 2, text: 'I\'m learning React.js!!'},
                {id: 3, text: 'This is dialogues page!!!'},
                {id: 4, text: 'Now there are some props'},
                {id: 5, text: 'Try to stop me!'},
                {id: 6, text: 'HaHaa'},
            ],
            newMessageBody: ''
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Evelina'},
                {id: 2, name: 'Izyum'},
                {id: 3, name: 'Barsik'}
            ]
        }
    },
    _callSubscriber() {
        return 1
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.messagesPage = messageReducer(this._state.messagesPage, action)
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state);

    }
}

export default store;