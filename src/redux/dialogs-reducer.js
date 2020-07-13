
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 4,
                message: action.newMessage
            };
            return {
                ...state,
                messages: [...state.messages,newMessage],
            };
        default:
            return state;
    }
};

export const addMessageActionCreator = (newMessage) => {
    return {
        type: SEND_MESSAGE,
        newMessage
    }
};


export default dialogsReducer
