const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST =  'ADD_POST';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 12},
                {id: 2, message: "Its my first post", likesCount: 25}
            ],
            newPostText: ""
        },
        dialogsPage: {
            messages: [
                {message: "Hi", id: 1},
                {message: "How are you?", id: 2},
                {message: "Yo", id: 3},
            ],
            dialogs: [
                {name: "Dimych", id: 1},
                {name: "Andrey", id: 2},
                {name: "Sveta", id: 3},
                {name: "Sasha", id: 4},
                {name: "Viktor", id: 5},
                {name: "Valera", id: 6}
            ]
        },

    },
    _callSubscriber() {
        console.log("State changed")
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if(action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message:this._state.profilePage.newPostText,
                likesCount: 14
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
};


export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,newText : text
    }
}




export default store;