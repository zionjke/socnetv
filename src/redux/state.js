let state = {
    profilePage: {
        posts:[
            {id:1, message:"Hi, how are you?",likesCount:12},
            {id:2, message:"Its my first post",likesCount:25}
        ],
    },
    dialogsPage: {
        messages:[
            {message: "Hi",id:1},
            {message: "How are you?",id:2},
            {message: "Yo",id:3},
        ],
        dialogs:[
            {name: "Dimych", id:1},
            {name: "Andrey", id:2},
            {name: "Sveta", id:3},
            {name: "Sasha", id:4},
            {name: "Viktor", id:5},
            {name: "Valera", id:6}
        ]
    }
};

export let addPost = (postMessage) => {
    state.profilePage.posts.push({id:5, message: postMessage, likesCount:14});
};

export default state