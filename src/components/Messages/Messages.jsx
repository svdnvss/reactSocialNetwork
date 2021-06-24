import s from './Messages.module.css'
import DialogueItem from "./DialogueItem/DialogueItem";
import Message from "./Message/Message";

const Messages = (props) => {

    let dialoguesElements =
        props.dialogues.map(d => <DialogueItem name={d.name} id={d.id}/>)

    let messagesElements =
        props.messages.map(m => <Message message={m.text}/>)

    return (
        <div className={s.dialogues}>
            <div className={s.dialoguesItems}>
                {dialoguesElements}
            </div>
            <div className={s.messagesItems}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Messages;