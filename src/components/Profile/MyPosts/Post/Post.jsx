import React from "react";
import styles from './Post.module.css'

const Post = (props) => {
    return (
        <div className={styles.item}>
            <img
                src="https://lh3.googleusercontent.com/proxy/WP5547gt6pSiXrR-IX2Kl-Ltt4YjFH8MJbFmbSgL21bObJLaxTqliHWCep9nuXXgNQeAOKgG9MqV3XgPFyL3dlo-gDkuUF_KFtanTAKxfaPtnNcHSBTAYionZD0uNOPeGXU"
                alt=""/>
            {props.message}
            <div>
                <span>Like:{props.likeCount}</span>
            </div>
        </div>
    );
}

export default Post