import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";


let AuthRedirectComponent = withAuthRedirect(Dialogs);

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText,
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


const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer