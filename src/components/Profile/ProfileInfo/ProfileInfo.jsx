import React from "react";
import styles from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader/>
    }

    return (
        <div  className={styles.content}>
            <div>
                <img
                    src="https://sites.google.com/site/prirodaukraieni9612/_/rsrc/1368976917563/foto-prirodi-ukraieni/110.jpg"
                    alt=""/>
            </div>
            <div className={styles.description}>
                <img src={props.profile.photos.large} alt=""/>
                <span>{props.profile.aboutMe}</span>
            </div>
        </div>
    );
};

export default ProfileInfo