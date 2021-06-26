import s from './DialogueItem.module.css'
import {NavLink} from "react-router-dom";

const DialogueItem = (props) => {
    let path = '/messages/' + props.id

    return (
        <div className={s.dialogue + ' ' + s.active}>
            <NavLink to={path}>
                <img src="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"/>
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogueItem;