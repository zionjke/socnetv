import React from "react";
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs  = (props) => {

    let messagesEl = props.state.messages.map(m => <Message message={m.message}/>);
    let dialogsEl = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsEl}
            </div>
            <div className={styles.messages}>
                {messagesEl}
            </div>
        </div>
    );
}

export default Dialogs