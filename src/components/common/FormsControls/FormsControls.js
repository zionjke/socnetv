import React from "react";
import styles from './FormsControls.module.css'

const FormControl = ({input,meta, children, ...props}) => {
    const hasError = meta.touched && meta.error ;

    return (
        <div className={`${styles.formControl} ${hasError ? styles.error : ''}`}>
            {props.children}
            <div>
                {hasError && <span className={styles.error}>{meta.error}</span>}
            </div>
        </div>
    )
};


 export const Textarea = ({input,meta, ...props}) => {
     const hasError = meta.touched && meta.error ;

    return (
        <div className={`${styles.formControl} ${hasError ? styles.error : ''}`}>
            <textarea  {...input} {...props}>

            </textarea>
            <div>
                 {hasError && <span className={styles.error}>{meta.error}</span>}
           </div>
         </div>
   )
 };


export const Input = ({input,meta, ...props}) => {
    const hasError = meta.touched && meta.error ;

    return (
        <div className={`${styles.formControl} ${hasError ? styles.error : ''}`}>
            <input  {...input} {...props}>

            </input>
            <div>
                {hasError && <span className={styles.error}>{meta.error}</span>}
            </div>
        </div>
    )
};
