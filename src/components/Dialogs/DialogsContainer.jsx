import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().dialogsPage

                    let onMessageChange = (messageText) => {
                        store.dispatch(updateNewMessageTextActionCreator(messageText))
                    };

                    let addMessage = () => {
                        store.dispatch(addMessageActionCreator())
                    };
                    return <Dialogs addMessage={addMessage}
                                    updateNewMessageText={onMessageChange}
                                    dialogsPage={state}/>
                }
            }
        </StoreContext.Consumer>

    );
};

export default DialogsContainer