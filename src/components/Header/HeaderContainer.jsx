import React from "react";
import Header from "./Header";
import {makeAuth} from "../../redux/authReducer";
import {connect} from "react-redux";
import Preloader from "../common/Preloader/Preloader";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.makeAuth();
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
    makeAuth
})(HeaderContainer);