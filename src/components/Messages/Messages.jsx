import s from './Messages.module.css'
import React from 'react';
import DialogueItem from "./DialogueItem/DialogueItem";
import Message from "./Message/Message";

const Messages = (props) => {

    let state = props.messagesPage

    let dialoguesElements =
        state.dialogues.map(d => <DialogueItem name={d.name} id={d.id}/>)

    let messagesElements =
        state.messages.map(m => <Message message={m.text}/>)

    let newMessageBody = state.newMessageBody;

    let messageLink = React.createRef();

    let onMessageChange = (e) => {
        let messageBody = e.target.value;
        props.onMessageChange(messageBody);
    }

    let sendMessage = () => {
        props.sendMessage();
    }

    return (
        <div className={s.dialogues}>
            <div className={s.dialoguesItems}>
                {dialoguesElements}
            </div>
            <div className={s.messagesItems}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea onChange={onMessageChange}
                                  placeholder='Enter message'
                                  ref={messageLink}
                                  value={newMessageBody}
                                  cols='100' rows='4'></textarea>
                    </div>
                    <div>
                        <button onClick={sendMessage}>Send message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages;