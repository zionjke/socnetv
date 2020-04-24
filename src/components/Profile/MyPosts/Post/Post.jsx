import React from "react";
import styles from './Post.module.css'

const Post = (props) => {
    return (
        <div className={styles.item}>
            <img
                src="https://w0.pngwave.com/png/799/987/computer-icons-avatar-social-media-blog-font-awesome-avatar-png-clip-art.png"
                alt=""/>
            {props.message}
            <div>
                <span>Like:{props.likesCount}</span>
            </div>
        </div>
    );
}

export default Post