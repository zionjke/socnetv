import React from "react";
import styles from './Dialogs.module.css'


const Dialogs  = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <div className={styles.dialog + " " + styles.active}>
                    Dimych
                </div>
                <div className={styles.dialog}>
                    Andrey
                </div>
                <div className={styles.dialog}>
                    Sveta
                </div>
                <div className={styles.dialog}>
                    Sasha
                </div>
            </div>
            <div className={styles.messages}>
                <div className={styles.message}>Hi</div>
                <div className={styles.message}>How is your It?</div>
                <div className={styles.message}>Yo</div>
            </div>
        </div>
    );
}

export default Dialogs