import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setIsFetching,
    setPage,
    setTotalUserCount,
    setUsers, unFollow,
    unfollow
} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{withCredentials:true}).then(response => {
            this.props.setIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUserCount(response.data.totalCount / 200);
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setPage(pageNumber);
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,{withCredentials:true}).then(response => {
            this.props.setIsFetching(false);
            this.props.setUsers(response.data.items);
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
                       unFollow={this.props.unFollow}/>
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
        isFetching: state.usersPage.isFetching
    }
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             const action = followAC(userId);
//             dispatch(action)
//         },
//         unFollow: (userId) => {
//             const action = unfollowAC(userId);
//             dispatch(action)
//         },
//         setUsers: (users) => {
//             const action = setUsersAC(users);
//             dispatch(action)
//         },
//         setPage: (pageNumber) => {
//             const action = setPageAC(pageNumber);
//             dispatch(action)
//         },
//         setTotalUsersCount: (userCount) => {
//             const action = setTotalUserCountAC(userCount);
//             dispatch(action)
//         },
//         toggleIsFetching: (isFetching) => {
//             const action = setIsFetchingAC(isFetching);
//             dispatch(action)
//         }
//     }
// };

export default connect(mapStateToProps,
    {follow,unFollow,setUsers,setPage,setTotalUserCount,setIsFetching
    })(UsersContainer)

