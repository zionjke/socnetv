import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage

    let onMessageChange = (messageText) => {
        props.store.dispatch(updateNewMessageTextActionCreator(messageText))
    };

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    };


    return (
        <Dialogs addMessage={addMessage}
                 updateNewMessageText={onMessageChange}
                 dialogsPage={state}/>
    );
};

export default DialogsContainer