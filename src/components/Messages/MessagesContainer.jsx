import React from 'react';
import {sendMessage, updateNewMessageBody} from "../../redux/messagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";

const mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}

const MessagesContainer = withAuthRedirect(connect(mapStateToProps, {
    updateNewMessageBody,
    sendMessage
})(Messages));

export default MessagesContainer;