import React from "react";
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let messagesEl = props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message}/>);
    let dialogsEl = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);

    let newMessageRef = React.createRef();

    let onMessageChange = () => {
        let messageText = newMessageRef.current.value;
        props.updateNewMessageText(messageText)
    };

    let onAddMessage = () => {
        props.addMessage();
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
                        <button onClick={onAddMessage}>
                            Send message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs