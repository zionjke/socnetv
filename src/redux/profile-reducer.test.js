import profileReducer, {addPostActionCreator} from "./profile-reducer";
import React from 'react';

test('new post should be added', () => {
    // 1. test data
    let action = addPostActionCreator('new post');
    let state = {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 12},
            {id: 2, message: "Its my first post", likesCount: 25}
        ]
    };

    //2. action
    let newState =  profileReducer(state,action);

    //3. expectation
    expect(newState.posts.length).toBe(3)
});


