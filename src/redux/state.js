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
            ]
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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: (this._state.profilePage.posts.length + 1),
                message: this._state.profilePage.postText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.postText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.postText = action.text;
            this._callSubscriber(this._state);
        }
    }
}

export default store;