import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";




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

export default compose(connect(mapStateToProps,mapDispatchToProps),withAuthRedirect)(Dialogs);

