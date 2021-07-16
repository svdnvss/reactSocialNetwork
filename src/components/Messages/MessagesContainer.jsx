import React from 'react';
import {sendMessage, updateNewMessageBody} from "../../redux/messagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}

const MessagesContainer = connect(mapStateToProps, {
    updateNewMessageBody,
    sendMessage
})(Messages);

export default MessagesContainer;