import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = 18383;
        }

        this.props.getUserProfile(userId);

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
    getUserProfile
})(WithRouterProfilePageContainer);