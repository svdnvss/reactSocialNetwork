const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

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
        if (action.type === ADD_POST) {
            let newPost = {
                id: (this._state.profilePage.posts.length + 1),
                message: this._state.profilePage.postText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.postText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.postText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.messagesPage.newMessageBody = action.newBody;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let newMessage = {
                id: (this._state.messagesPage.messages.length + 1),
                text: this._state.messagesPage.newMessageBody
            }
            this._state.messagesPage.messages.push(newMessage);
            this._state.messagesPage.newMessageBody = '';
            this._callSubscriber(this._state);
        }
    }
}

export const addPostCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageBodyCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        newBody: text
    }
}

export default store;