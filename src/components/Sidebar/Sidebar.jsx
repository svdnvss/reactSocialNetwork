import s from './Sidebar.module.css'
import SidebarItems from "./SidebarItems/SidebarItems";

const Sidebar = (props) => {
    let state = props.sidebar;

    return (
        <nav className={s.side}>
            <br/>
            <br/>
            <br/>
            <h1>Friends</h1>
            <SidebarItems friends={state.friends} />
        </nav>
    )
}

export default Sidebar;