import {rerenderEntireTree} from "./../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hey wazzup', likesCount: 15},
            {id: 2, message: 'It is my second post!!', likesCount: 20},
            {id: 3, message: 'I am learning React.js!', likesCount: 12},
            {id: 4, message: 'Now I know how to use props!', likesCount: 98},
        ]
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
}

export let addPost = (postText) => {

    let newPost = {
        id: (state.profilePage.posts.length + 1),
        message: postText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;