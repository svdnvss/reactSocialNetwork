import s from './SidebarItems.module.css'
import {NavLink} from "react-router-dom";
import SidebarFriend from "./SidebarFriend/SidebarFriend";

const SidebarItems = (props) => {
    let sideFriend =
        props.friends.map(f => <SidebarFriend name={f.name} />)
    return (
        <nav className={s.sideItems}>
            { sideFriend }
        </nav>
    )
}

export default SidebarItems;