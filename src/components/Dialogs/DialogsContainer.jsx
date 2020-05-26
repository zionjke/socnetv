import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


// const DialogsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState().dialogsPage;
//
//                     let onMessageChange = (messageText) => {
//                         store.dispatch(updateNewMessageTextActionCreator(messageText))
//                     };
//
//                     let addMessage = () => {
//                         store.dispatch(addMessageActionCreator())
//                     };
//                     return <Dialogs addMessage={addMessage}
//                                     updateNewMessageText={onMessageChange}
//                                     dialogsPage={state}/>
//                 }
//             }
//         </StoreContext.Consumer>
//
//     );
// };

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (messageText) => {
            dispatch(updateNewMessageTextActionCreator(messageText))
        },
        addMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
};

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer