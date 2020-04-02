import React from "react";
import styles from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Отправить</button>
            </div>
            <Post/>
            <Post/>
        </div>
    );
}

export default MyPosts