import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {api} from "../../dal/api";


class ProfileContainer extends React.Component{

    componentDidMount() {
        let userID = this.props.match.params.userId;
        if (!userID) {
            userID = 2
        }
        api.getProfile(userID).then(data => {
            this.props.setUserProfile(data);
        })
    }

    render() {
        return(
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
};

let WithUrlDataContainerComponent =  withRouter(ProfileContainer);

export default connect(mapStateToProps,{setUserProfile})(WithUrlDataContainerComponent)
