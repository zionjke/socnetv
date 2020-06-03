const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            };

        case SEND_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageText
            };
            return {
                ...state,
                messages: [...state.messages,newMessage],
                newMessageText: ""
            };
        default:
            return state;
    }
};

export const addMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
};

export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText : text
    }
};

export default dialogsReducer
