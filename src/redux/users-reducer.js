const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USER';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const TOGGLE_ISFETCHING = 'TOGGLE_ISFETCHING'


const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: false
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
                }
        }
    return state
};


export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId,
    }
};

export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId,
    }
};

export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users
    }
};

export const setPageAC = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
};

export const setTotalUserCountAC = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USER_COUNT,
        totalUsersCount
    }
};

export const setIsFetchingAC = (isFetching) => {
    return {
        type: TOGGLE_ISFETCHING,
        isFetching
    }
};

export default usersReducer