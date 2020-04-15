import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id:1, message:"Hi, how are you?",likeCount:12},
    {id:2, message:"Its my first post",likeCount:25}
]

let dialogs = [
    {name: "Dimych", id:1},
    {name: "Andrey", id:2},
    {name: "Sveta", id:3},
    {name: "Sasha", id:4},
    {name: "Viktor", id:5},
    {name: "Valera", id:6}
]

let messages = [
    {message: "Hi",id:1},
    {message: "How are you?",id:2},
    {message: "Yo",id:3},
]

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
