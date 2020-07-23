import React from "react";
import {connect} from "react-redux";
import {
    follow,
    getUsersSuccess,
    toggleFollowingProgress,
    unFollow,
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/selectors/users-selectors";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersSuccess(this.props.currentPage,this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersSuccess(pageNumber,this.props.pageSize)
    };

    render() {
        return (
            <>
                {this.props.isFetching
                    ? <Preloader/>
                    : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       onPageChanged={this.onPageChanged}
                       currentPage={this.props.currentPage}
                       users={this.props.users}
                       followingInProgress={this.props.followingInProgress}
                       unFollow={this.props.unFollow}
                       follow={this.props.follow}/>

            </>

        );
    };
}


// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// };

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
};

export default compose(connect(mapStateToProps, {toggleFollowingProgress, getUsersSuccess,unFollow,follow}))(UsersContainer)

