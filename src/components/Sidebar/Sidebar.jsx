import s from './Sidebar.module.css'
import {NavLink} from "react-router-dom";
import SidebarItems from "./SidebarItems/SidebarItems";

const Sidebar = (props) => {
    return (
        <nav className={s.side}>
            <br/>
            <br/>
            <br/>
            <h1>Friends</h1>
            <SidebarItems friends={props.friends} />
        </nav>
    )
}

export default Sidebar;