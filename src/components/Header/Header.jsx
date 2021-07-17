import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/512px-LEGO_logo.svg.png"/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <p>{props.login}</p>
                    : <NavLink to={'/login/'}>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header;