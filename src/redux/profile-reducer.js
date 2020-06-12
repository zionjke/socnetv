const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST =  'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "Its my first post", likesCount: 25}
    ],
    newPostText: "",
    profile: null
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
                 message: state.newPostText,
                 likesCount: 14
             };

             return {
                 ...state,
                 posts: [...state.posts,newPost],
                 newPostText: ""
             };

         case UPDATE_NEW_POST_TEXT:
             return {
                 ...state,
                 newPostText: action.newText
             };

         default:
             return state;
     }

};

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText : text
    }
};

export const setUserProfile = (userProfile) => {
    return{
        type: SET_USER_PROFILE,
        userProfile
    }
};

 export default profileReducer