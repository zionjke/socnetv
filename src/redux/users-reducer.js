const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USER';


const initialState = {
    users: [
        // {id:1, photoUrl:"https://sun9-11.userapi.com/c841126/v841126729/78500/uwHbsXbX9KQ.jpg?ava=1", isFollowed:true, fullName:'Artem',status:'I am a boss',location:{city:'Kiev',country:'Ukraine'}},
        // {id:2,  photoUrl:"https://sun9-11.userapi.com/c841126/v841126729/78500/uwHbsXbX9KQ.jpg?ava=1", isFollowed:false, fullName:'Dima',status:'I am a boss too',location:{city:'Minsk',country:'Belarus'}},
        // {id:3,  photoUrl:"https://sun9-11.userapi.com/c841126/v841126729/78500/uwHbsXbX9KQ.jpg?ava=1", isFollowed:true, fullName:'Sergey',status:'I am a boss too',location:{city:'Moskow',country:'Russia'}}
    ]
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
                    users: [...state.users, ...action.users]
                };
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

export default usersReducer