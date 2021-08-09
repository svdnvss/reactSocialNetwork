import React from 'react';
import {sendMessage, updateNewMessageBody} from "../../redux/messagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}

export default compose(
    connect(mapStateToProps, {updateNewMessageBody, sendMessage}),
    withAuthRedirect
)(Messages);