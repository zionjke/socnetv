import React from "react";
import styles from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let newPostElement = React.createRef()
    let postsEl = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>);
    let addPost = () => {
        let text = newPostElement.current.value
        alert(text)
    };

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
                <div>
                    <textarea  ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Отправить</button>
                </div>
            <div className={styles.posts}>
                {postsEl}
            </div>
        </div>
    );
}

export default MyPosts