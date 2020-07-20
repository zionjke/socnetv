import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";



class ProfileContainer extends React.Component{

    componentDidMount() {
        let userID = this.props.match.params.userId;
        if (!userID) {
            userID = this.props.authUserId
        }
        this.props.getUserProfile(userID);
        this.props.getUserStatus(userID)
    }

    render() {
        return(
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}
                         status={this.props.status}
                         isAuth={this.props.isAuth}
                         updateUserStatus={this.props.updateUserStatus}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        isAuth:state.auth.isAuth,
        authUserId:state.auth.id
    }
};


export default compose(connect(mapStateToProps,{getUserProfile,getUserStatus,updateUserStatus}),withRouter,withAuthRedirect)(ProfileContainer);

