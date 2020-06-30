import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";



class ProfileContainer extends React.Component{

    componentDidMount() {
        let userID = this.props.match.params.userId;
        if (!userID) {
            userID = 2
        }
        this.props.getUserProfile(userID)
    }

    render() {
        return(
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}


let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
};

let WithUrlDataContainerComponent =  withRouter(AuthRedirectComponent);

export default connect(mapStateToProps,{getUserProfile})(WithUrlDataContainerComponent)
