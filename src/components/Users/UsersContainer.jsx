import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            const action = followAC(userId);
            dispatch(action)
        },
        unFollow: (userId) => {
            const action = unfollowAC(userId);
            dispatch(action)
        },
        setUsers: (users) => {
            const action = setUsersAC(users);
            dispatch(action)
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Users)

