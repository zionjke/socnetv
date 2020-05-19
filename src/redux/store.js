import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

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
            newMessageText: "",
            dialogs: [
                {name: "Dimych", id: 1},
                {name: "Andrey", id: 2},
                {name: "Sveta", id: 3},
                {name: "Sasha", id: 4},
                {name: "Viktor", id: 5},
                {name: "Valera", id: 6}
            ]
        },
        sidebar: {}
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
        this._state.profilePage =  profileReducer(this._state.profilePage,action);
        this._state.dialogsPage =  dialogsReducer(this._state.dialogsPage,action);
        this._callSubscriber(this._state);
    }
};






export default store;