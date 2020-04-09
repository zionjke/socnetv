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
            <Post message="Hi, how are you?" likeCount={15}/>
            <Post message="Its my first post" likeCount={20}/>
        </div>
    );
}

export default MyPosts