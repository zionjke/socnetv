import React from "react";
import styles from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";

import {Redirect} from "react-router-dom";
import ProfileStatusFnc from "./ProfileStatus";

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader/>
    }
    if(!props.isAuth) {
        return <Redirect to='/login'/>
    }

    return (
        <div  className={styles.content}>
            <div className={styles.description}>
                <img src={props.profile.photos.large} alt=""/>
                <span>{props.profile.aboutMe}</span>
                <ProfileStatusFnc status={props.status}
                               updateUserStatus={props.updateUserStatus}/>
            </div>
        </div>
    );
};

export default ProfileInfo