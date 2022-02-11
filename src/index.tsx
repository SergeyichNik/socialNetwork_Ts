import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

export type PostDataType = {
    id: number,
    message: string,
    likesCount: number
}

let postData = [
    {id: 0, message: 'my first post', likesCount: 12},
    {id: 1, message: 'my second post', likesCount: 5},
    {id: 2, message: 'my third post', likesCount: 11},
]


export type dialogsDataType = {
    id: number,
    name: string
}

let dialogsData = [
    {id: 0, name: 'Dima'},
    {id: 1, name: 'Sveta'},
    {id: 2, name: 'Frida'},
    {id: 3, name: 'John'},
    {id: 4, name: 'Ruso'}
]

export type messagesDataType = {
    id: number
    message: string
}


let messagesData = [
    {id: 0, message: 'Dima1'},
    {id: 1, message: 'Sveta2'},
    {id: 2, message: 'Frida3'},
    {id: 3, message: 'John4'},
    {id: 4, message: 'Ruso5'}
]


ReactDOM.render(
    <BrowserRouter>
        <App postData={postData}
             dialogsData={dialogsData}
             messagesData={messagesData}/>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
