import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = 18383;
        }
        profileAPI.setUserProfile(userId).then(response => {
                this.props.setUserProfile(response);
            })

    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

let WithRouterProfilePageContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    setUserProfile
})(WithRouterProfilePageContainer);