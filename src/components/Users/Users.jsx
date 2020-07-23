import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/def_avatar.png";
import {NavLink} from "react-router-dom";


const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span onClick={() => {
                        props.onPageChanged(p)
                    }} className={`${props.currentPage === p && styles.selectedPage}`}>{p}</span>
                })}
            </div>
            {props.users.map(user => <div key={user.id}>
                <span>
                   <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.photo}/>
                    </NavLink>
                    <div>
                        {
                            user.followed
                                ? <button disabled={props.followingInProgress.some(id => id === user.id)}
                                          onClick={() => {
                                              props.unFollow(user.id)
                                          }}>
                                    Unfollow
                                </button>
                                : <button disabled={props.followingInProgress.some(id => id === user.id)}
                                          onClick={() => {
                                              props.follow(user.id)
                                          }}>
                                    follow
                                </button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>
                            {user.name}
                        </div>
                        <div>
                            {user.status}
                        </div>
                    </span>
                    <span>
                        <div>
                            {"user.location.city"}
                        </div>
                        <div>
                            {"user.location.country"}
                        </div>
                    </span>
                </span>
            </div>)}
        </div>
    )
};

export default Users