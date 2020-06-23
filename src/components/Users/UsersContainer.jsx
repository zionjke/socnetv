import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setIsFetching,
    setPage,
    setTotalUserCount,
    setUsers, toggleFollowingProgress, unFollow,
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {api} from "../../dal/api";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true);
        api.getUsers(this.props.currentPage,this.props.pageSize)
            .then(data => {
            this.props.setIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUserCount(data.totalCount / 200);
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setPage(pageNumber);
        this.props.setIsFetching(true);
        api.getPageNumber(pageNumber,this.props.pageSize)
            .then(data => {
            this.props.setIsFetching(false);
            this.props.setUsers(data.items);
        })
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
                       follow={this.props.follow}
                       unFollow={this.props.unFollow}
                       toggleFollowingProgress={this.props.toggleFollowingProgress}
                       followingInProgress={this.props.followingInProgress}/>

            </>

        );
    };
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};



export default connect(mapStateToProps,
    {follow,unFollow,setUsers,setPage,setTotalUserCount,setIsFetching,toggleFollowingProgress
    })(UsersContainer)

