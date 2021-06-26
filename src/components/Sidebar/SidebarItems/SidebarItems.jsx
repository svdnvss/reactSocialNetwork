import s from './SidebarItems.module.css'
import {NavLink} from "react-router-dom";
import SidebarFriend from "./SidebarFriend/SidebarFriend";

const SidebarItems = () => {
    return (
        <nav className={s.sideItems}>
            <div className={s.item}>
                <SidebarFriend name='Evelina' />
            </div>
            <div className={s.item}>
                <SidebarFriend name='Izyum'/>
            </div>
            <div className={s.item}>
                <SidebarFriend name='Barsik'/>
            </div>
        </nav>
    )
}

export default SidebarItems;