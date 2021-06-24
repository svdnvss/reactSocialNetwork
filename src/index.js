import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'Hey wazzup', likesCount: 15},
    {id: 2, message: 'It is my second post!!', likesCount: 20},
    {id: 3, message: 'I am learning React.js!', likesCount: 12},
    {id: 4, message: 'Now I know how to use props!', likesCount: 98},
]

let dialogues = [
    {id: 1, name: 'Evelina'},
    {id: 2, name: 'Izyum'},
    {id: 3, name: 'Barsik'},
    {id: 4, name: 'Bogdan'},
    {id: 5, name: 'Ilyas'},
    {id: 6, name: 'Busya'},
]

let messages = [
    {id: 1, text: 'Hello!'},
    {id: 2, text: 'I\'m learning React.js!!'},
    {id: 3, text: 'This is dialogues page!!!'},
    {id: 4, text: 'Now there are some props'},
    {id: 5, text: 'Try to stop me!'},
    {id: 6, text: 'HaHaa'},
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogues={dialogues} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
