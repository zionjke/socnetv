import React from "react";
import styles from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {id:1, message:"Hi, how are you?",likeCount:12},
        {id:2, message:"Its my first post",likeCount:25}
    ]

    let postsEl = posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>);

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
                {postsEl}
            </div>
        </div>
    );
}

export default MyPosts