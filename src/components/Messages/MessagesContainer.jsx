import DialogueItem from "./DialogueItem/DialogueItem";
import Message from "./Message/Message";
import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/messagesReducer";
import Messages from "./Messages";

const MessagesContainer = (props) => {

    let state = props.store.getState().messagesPage;

    let onMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    let sendMessage = () => {
        props.store.dispatch(sendMessageCreator());
    }

    return <Messages messagesPage={state}
                     onMessageChange={onMessageChange}
                     sendMessage={sendMessage}/>
}

export default MessagesContainer;