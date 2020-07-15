import React from "react";
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLenghtCreator, minLenghtCreator, required} from "../../utils/validators/validators";

let minLength2 = minLenghtCreator(1);
let maxLength100 = maxLenghtCreator(100);


const Dialogs = (props) => {

    let messagesEl = props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message}/>);
    let dialogsEl = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);


    let addNewMessage = (formData) => {
        props.addMessage(formData.newMessage);
    };

   if(!props.isAuth) {
       return <Redirect to='/login'/>
   }


    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsEl}
            </div>
            <div className={styles.messages}>
                <div>
                    {messagesEl}
                </div>
                <AddMessageReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    );
};

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name='newMessage'
                       placeholder='Enter Your message'
                       validate={[required,minLength2,maxLength100]}/>
            </div>
            <div>
                <button>Отправить</button>
            </div>
        </form>
    )
};


const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs