import React from "react";
import styles from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {

    let postsEl = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

    let addNewPost = (formData) => {
        props.addPost(formData.newPostText)
    };

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <AddPostReduxForm onSubmit={addNewPost}/>
            <div className={styles.posts}>
                {postsEl}
            </div>
        </div>
    );
};

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field component='textarea' name='newPostText' />
            </div>
            <div>
                <button >Отправить</button>
            </div>
        </form>
    )
};

const AddPostReduxForm = reduxForm({form: 'ProfileAddPostForm'})(AddPostForm);

export default MyPosts