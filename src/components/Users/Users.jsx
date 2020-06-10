import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/def_avatar.png";

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
                    }} className={props.currentPage === p && styles.selectedPage}>{p}</span>
                })}
            </div>
            {props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.photo}/>
                    </div>
                    <div>
                        {
                            user.isFollowed
                                ? <button onClick={() => {
                                    props.unFollow(user.id)
                                }}>Follow</button>
                                : <button onClick={() => {
                                    props.follow(user.id)
                                }}>Unfollow</button>
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