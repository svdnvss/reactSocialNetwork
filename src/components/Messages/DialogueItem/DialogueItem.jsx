import s from './../Messages.module.css'
import {NavLink} from "react-router-dom";

const DialogueItem = (props) => {
    let path = '/messages/' + props.id

    return (
        <div className={s.dialogue + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogueItem;