import React from "react";
import styles from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Отправить</button>
                </div>
            <div className={styles.posts}>
                <Post message="Hi, how are you?" likeCount={15}/>
                <Post message="Its my first post" likeCount={20}/>
            </div>
        </div>
    );
}

export default MyPosts