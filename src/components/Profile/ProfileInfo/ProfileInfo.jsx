import React from "react";
import styles from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div  className={styles.content}>
            <div>
                <img
                    src="https://sites.google.com/site/prirodaukraieni9612/_/rsrc/1368976917563/foto-prirodi-ukraieni/110.jpg"
                    alt=""/>
            </div>
            <div className={styles.description}>
                ava+description
            </div>
        </div>
    );
}

export default ProfileInfo