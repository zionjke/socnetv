import React from "react";
import styles from './users.module.css'

const Users = (props) => {

    if(props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: "https://sun9-11.userapi.com/c841126/v841126729/78500/uwHbsXbX9KQ.jpg?ava=1",
                    isFollowed: true,
                    fullName: 'Artem',
                    status: 'I am a boss',
                    location: {city: 'Kiev', country: 'Ukraine'}
                },
                {
                    id: 2,
                    photoUrl: "https://sun9-11.userapi.com/c841126/v841126729/78500/uwHbsXbX9KQ.jpg?ava=1",
                    isFollowed: false,
                    fullName: 'Dima',
                    status: 'I am a boss too',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 3,
                    photoUrl: "https://sun9-11.userapi.com/c841126/v841126729/78500/uwHbsXbX9KQ.jpg?ava=1",
                    isFollowed: true,
                    fullName: 'Sergey',
                    status: 'I am a boss too',
                    location: {city: 'Moskow', country:'Russia'}}
            ]
        );
    }


    return(

        <div>
            {props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img src={user.photoUrl} className={styles.photo} />
                    </div>
                    <div>
                        {
                            user.isFollowed
                            ? <button onClick={ () => {props.unFollow(user.id)} }>Follow</button>
                            : <button onClick={ () => {props.follow(user.id)} }>Unfollow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>
                            {user.fullName}
                        </div>
                        <div>
                            {user.status}
                        </div>
                    </span>
                    <span>
                        <div>
                            {user.location.city}
                        </div>
                        <div>
                            {user.location.country}
                        </div>
                    </span>
                </span>
            </div>)}
        </div>
    );
};


export default Users