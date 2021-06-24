import s from './Messages.module.css'
import {NavLink} from "react-router-dom";

const Messages = (props) => {
    return (
        <div className={s.dialogues}>
            <div className={s.dialogueItems}>
                <div className={s.dialogue + ' ' + s.active}>
                    <NavLink to='/messages/1'>Evelina</NavLink>
                </div>
                <div className={s.dialogue}>
                    <NavLink to='/messages/2'>Izyum</NavLink>
                </div>
                <div className={s.dialogue}>
                    <NavLink to='/messages/3'>Barsik</NavLink>
                </div>
                <div className={s.dialogue}>
                    <NavLink to='/messages/4'>Bogdan</NavLink>
                </div>
            </div>
            <div className={s.messageItems}>
                <div className={s.message}>
                    Hello!
                </div>
                <div className={s.message}>
                    I'm learning React.js!!
                </div>
                <div className={s.message}>
                    This is dialogues page!!!
                </div>
            </div>
        </div>
    )
}

export default Messages;