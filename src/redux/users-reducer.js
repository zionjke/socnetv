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


export const follow = (userId) => {
    return {
        type: FOLLOW,
        userId,
    }
};

export const unFollow = (userId) => {
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

export const setIsFetching = (isFetching) => {
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

export default usersReducer