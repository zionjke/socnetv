import React from "react";
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={`${styles.item} ${styles.active}`}>
                <NavLink to="/profile" activeClassName={styles.active}>Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/dialogs"  activeClassName={styles.active}>Dialogs</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/news">News</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/music">Music</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/settings">Settings</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/users">Users</NavLink>
            </div>

        </nav>
    );
};

export default Navbar