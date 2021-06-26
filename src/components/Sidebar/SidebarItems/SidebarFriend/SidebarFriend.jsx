import s from './SidebarFriend.module.css'
import {NavLink} from "react-router-dom";

const SidebarFriend = (props) => {
    return (
        <nav className={s.friend}>
            <img src="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"/>
            <h3>{props.name}</h3>
        </nav>
    )
}

export default SidebarFriend;