import React from "react";
import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={styles.content}>
            <div>
                <img
                    src="https://sites.google.com/site/prirodaukraieni9612/_/rsrc/1368976917563/foto-prirodi-ukraieni/110.jpg"
                    alt=""/>
            </div>
            <div>
                ava+description
            </div>
            <MyPosts/>
        </div>
    );
}

export default Profile