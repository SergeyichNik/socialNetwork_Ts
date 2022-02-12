import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import state, {
    addPost,
    dialogsDataType,
    messagesDataType,
    postDataType,
    setNewPostMessage,
    stateType,
    subscribe
} from "./redux/state";


let rerenderEntireTree = (state: stateType) => {

    ReactDOM.render(
        <BrowserRouter>
            <App appState={state}
                 addPost={addPost}
                 setNewPostMessage={setNewPostMessage}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state)
subscribe(rerenderEntireTree)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
