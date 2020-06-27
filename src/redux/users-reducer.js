import {api} from "../dal/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USER';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const TOGGLE_ISFETCHING = 'TOGGLE_ISFETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: false,
    followingInProgress: []
};

const usersReducer = (state= initialState,action) => {
        switch (action.type) {
            case FOLLOW:
                return {
                    ...state,
                    users: state.users.map (user  => {
                        if (user.id !== action.userId) {
                            return user
                        } else {
                            return {
                                ...user,
                                isFollowed: true
                            }
                        }
                    })
                };
            case UNFOLLOW:
                return {
                    ...state,
                    users: state.users.map (user  => {
                        if (user.id !== action.userId) {
                            return user
                        } else {
                            return {
                                ...user,
                                isFollowed: false
                            }
                        }
                    })
                };
            case SET_USERS:
                return {
                    ...state,
                    users: action.users
                };
            case SET_CURRENT_PAGE:
                return {
                    ...state,
                    currentPage: action.currentPage
                };
            case SET_TOTAL_USER_COUNT:
                return {
                    ...state,
                    totalUsersCount: action.totalUsersCount
                };
            case TOGGLE_ISFETCHING:
                return {
                    ...state,
                    isFetching: action.isFetching
                };
            case TOGGLE_IS_FOLLOWING_PROGRESS:
                return {
                    ...state,
                    followingInProgress: action.isFetching
                        ? [...state.followingInProgress,action.userID]
                        : [...state.followingInProgress.filter(id => id != action.userId)]
                }
        }
    return state
};


export const followAccept = (userId) => {
    return {
        type: FOLLOW,
        userId,
    }
};

export const unFollowAccept = (userId) => {
    return {
        type: UNFOLLOW,
        userId,
    }
};

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
};

export const setPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
};

export const setTotalUserCount = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USER_COUNT,
        totalUsersCount
    }
};

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_ISFETCHING,
        isFetching
    }
};

export const toggleFollowingProgress = (isFetching,userId) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId
    }
};

export const getUsers = (currentPage,pageSize) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    api.getUsers(currentPage,pageSize)
        .then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUserCount(data.totalCount / 200))
})
};

export const unFollow = (userId) => (dispatch) => {
    dispatch(toggleFollowingProgress(true),userId);
    api.unFollowUser(userId).then(data=>{
        if(data.resultCode === 0) {
            dispatch(unFollowAccept(userId))
        }
        dispatch(toggleFollowingProgress(false),userId);
})
};

export const follow = (userId) => (dispatch) => {
    dispatch(toggleFollowingProgress(true),userId);
    api.followUser(userId).then(data=>{
        if(data.resultCode === 0) {
            dispatch(followAccept(userId))
        }
        dispatch(toggleFollowingProgress(false),userId);
    })
};


export default usersReducer