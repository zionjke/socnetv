import React from "react";
import styles from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = ({isAuth, logOut, login}) => {

    return (
        <header className={styles.header}>
            <img src="https://cdn3.f-cdn.com//files/download/70016655/Logo%202.png" alt=""/>
            <div className={styles.loginBlock}>
                {isAuth
                    ? <div>
                        <span>{login}</span>
                        <button onClick={() => logOut()}>Logout</button>
                    </div>
                    : <NavLink to='login'>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header