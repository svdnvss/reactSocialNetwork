const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hey wazzup', likesCount: 15},
        {id: 2, message: 'It is my second post!!', likesCount: 20},
        {id: 3, message: 'I am learning React.js!', likesCount: 12},
        {id: 4, message: 'Now I know how to use props!', likesCount: 98},
    ],
    postText: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            let newPost = {
                id: (state.posts.length + 1),
                message: state.postText,
                likesCount: 0
            };
            state.posts.push(newPost)
            state.postText = ''
            return state

        case UPDATE_NEW_POST_TEXT:
            state.postText = action.newText
            return state

        default:
            return state
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

export default profileReducer;