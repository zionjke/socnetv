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
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log("State changed")
    },
    addPost() {
        this._state.profilePage.posts.push({id: 5, message: this._state.profilePage.newPostText, likesCount: 14});
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
};


window.store = store;


export default store;