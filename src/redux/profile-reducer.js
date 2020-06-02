const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST =  'ADD_POST';

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "Its my first post", likesCount: 25}
    ],
    newPostText: ""
};

 const profileReducer = (state = initialState, action) => {

     switch (action.type) {
         case ADD_POST: {
             let newPost = {
                 id: 5,
                 message: state.newPostText,
                 likesCount: 14
             };
             let stateCopy = {...state};
             stateCopy.posts = [...state.posts];
             stateCopy.posts.push(newPost);
             stateCopy.newPostText = "";
             return stateCopy;
         }
         case UPDATE_NEW_POST_TEXT: {
             let stateCopy = {...state};
             stateCopy.newPostText = action.newText;
             return stateCopy;
         }
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
        type: UPDATE_NEW_POST_TEXT,newText : text
    }
};

 export default profileReducer