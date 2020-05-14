import React from "react";
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/state";

const Dialogs = (props) => {


    let messagesEl = props.state.messages.map(m => <Message message={m.message}/>);
    let dialogsEl = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let newMessageRef = React.createRef();

    let onMessageChange = () => {
        let messageText = newMessageRef.current.value;
        props.dispatch(updateNewMessageTextActionCreator(messageText))
    };

    let addMessage = () => {
        props.dispatch(addMessageActionCreator())
    };


    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsEl}
            </div>
            <div className={styles.messages}>
                <div>
                    {messagesEl}
                </div>
                <div>
                    <div>
                       <textarea ref={newMessageRef}
                                 onChange={onMessageChange}
                                 value={props.newMessageText}
                                 placeholder="Enter Your message"/>
                    </div>
                    <div>
                        <button onClick={addMessage}>
                            Send message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs