import React from "react";
import Header from "./Header";
import * as axios from "axios";
import {setUserAuthData} from "../../redux/authReducer";
import {connect} from "react-redux";
import {toggleIsFetching} from "../../redux/usersReducer";
import Preloader from "../common/Preloader/Preloader";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                this.props.toggleIsFetching(false)
                let {id, email, login} = response.data.data;
                this.props.setUserAuthData(id, email, login);
            })
    }

    render() {
        return <>
            <Header {...this.props}/>
            {this.props.isFetching ? <Preloader/> : null}
    </>
    }
}

const mapStateToProps = (state) => ({
    toggleIsFetching: state.auth.isFetching,
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {
    setUserAuthData,
    toggleIsFetching
})(HeaderContainer);