import {api} from "../dal/api";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST =  'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "Its my first post", likesCount: 25}
    ],
    newPostText: "",
    profile: null,
    status: ''
};

 const profileReducer = (state = initialState, action) => {

     switch (action.type) {
         case SET_USER_PROFILE:
            return  {
                ...state,
                profile: action.userProfile
            };
         case ADD_POST:
             let newPost = {
                 id: 5,
                 message: action.newPostText,
                 likesCount: 14
             };

             return {
                 ...state,
                 posts: [...state.posts,newPost],
                 newPostText: ""
             };

         case SET_STATUS:
             return {
                 ...state,
                 status: action.status
             };

         default:
             return state;
     }

};

export const addPostActionCreator = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText
    }
};

export const setUserStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
};



export const setUserProfile = (userProfile) => {
    return{
        type: SET_USER_PROFILE,
        userProfile
    }
};

export const getUserProfile = (userId) => (dispatch) => {
    api.getProfile(userId).then(data => {
        dispatch(setUserProfile(data))
    })
};

export const getUserStatus = (userId) => (dispatch) => {
    api.getStatus(userId).then(response => {
        dispatch(setUserStatus(response))
    })
};

export const updateUserStatus = (status) => (dispatch) => {
    api.updateStatus(status).then(() => {
            dispatch(setUserStatus(status))
    })
};

 export default profileReducer


