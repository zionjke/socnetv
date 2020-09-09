import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/def_avatar.png";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";


const Users = ({totalUsersCount,pageSize,users,followingInProgress,unFollow,follow,onPageChanged,currentPage}) => {

    return (
        <div>
           <Paginator totalUsersCount={totalUsersCount}
                      pageSize={pageSize}
                      onPageChanged={onPageChanged}
                      currentPage={currentPage} />
            {users.map(user => <div key={user.id}>
                <span>
                   <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.photo}/>
                    </NavLink>
                    <div>
                        {
                            user.followed
                                ? <button disabled={followingInProgress.some(id => id === user.id)}
                                          onClick={() => {
                                              unFollow(user.id)
                                          }}>
                                    Unfollow
                                </button>
                                : <button disabled={followingInProgress.some(id => id === user.id)}
                                          onClick={() => {
                                             follow(user.id)
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


