import React from "react";
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs  = (props) => {

    let dialogs = [
        {name: "Dimych", id:1},
        {name: "Andrey", id:2},
        {name: "Sveta", id:3},
        {name: "Sasha", id:4},
        {name: "Viktor", id:5},
        {name: "Valera", id:6}
    ]

    let messages = [
        {message: "Hi",id:1},
        {message: "How are you?",id:2},
        {message: "Yo",id:3},
    ]


    let messagesEl = messages.map(m => <Message message={m.message}/>);
    let dialogsEl = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

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