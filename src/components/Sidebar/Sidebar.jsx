import s from './Sidebar.module.css'
import {NavLink} from "react-router-dom";
import SidebarItems from "./SidebarItems/SidebarItems";

const Sidebar = () => {
    return (
        <nav className={s.side}>
            <h1>Friends</h1>
            <SidebarItems />
        </nav>
    )
}

export default Sidebar;