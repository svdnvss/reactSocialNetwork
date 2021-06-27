import s from './Messages.module.css'
import DialogueItem from "./DialogueItem/DialogueItem";
import Message from "./Message/Message";
import React from 'react';

const Messages = (props) => {

    let dialoguesElements =
        props.dialogues.map(d => <DialogueItem name={d.name} id={d.id}/>)

    let messagesElements =
        props.messages.map(m => <Message message={m.text}/>)

    let messageLink = React.createRef();

    let sendMessage = () => {
        let text = messageLink.current.value;
        alert(text);
    }

    return (
        <div className={s.dialogues}>
            <div className={s.dialoguesItems}>
                {dialoguesElements}
            </div>
            <div className={s.messagesItems}>
                {messagesElements}
                <textarea ref={messageLink} cols='100' rows='4'></textarea>
                <button onClick={sendMessage}>Send message</button>
            </div>
        </div>
    )
}

export default Messages;