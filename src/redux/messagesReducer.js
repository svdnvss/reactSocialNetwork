const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
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
}

const messageReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: (state.messages.length + 1),
                text: state.newMessageBody
            }
            state.messages.push(newMessage)
            state.newMessageBody = ''
            return state

        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newBody
            return state

        default:
            return state
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

export default messageReducer;