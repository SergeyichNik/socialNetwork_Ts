import React from 'react';

import './App.css';
import Header from "./conponents/Header/Header";
import Navigation from "./conponents/Navigation/Navigation";
import Profile from "./conponents/Profile/Profile";
import {Dialogs} from "./conponents/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {Music} from "./conponents/Music/Music";
import {News} from "./conponents/News/News";
import {Settings} from "./conponents/Settings/Settings";
import {dialogsDataType, messagesDataType, postDataType} from "./redux/state";


type stateType = {
    appState: {
        profilePage: {
            postData: postDataType[],
            newPostMessage: string
        },
        dialogsPage: {
            dialogsData: dialogsDataType[],
            messagesData: messagesDataType[]
        }
    },
    addPost: () => void,
    setNewPostMessage: (text: string) => void
}


function App(props: stateType) {

    const {profilePage, dialogsPage} = props.appState
    const {addPost, setNewPostMessage} = props

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navigation/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path={'/Dialogs/*'}
                           element={<Dialogs state={dialogsPage}/>}/>
                    <Route path={'/Profile'}
                           element={<Profile
                               state={profilePage}
                               addPost={addPost}
                               setNewPostMessage={setNewPostMessage}
                           />}/>
                    <Route path={'/News'} element={<News/>}/>
                    <Route path={'/Music'} element={<Music/>}/>
                    <Route path={'/Settings'} element={<Settings/>}/>
                </Routes>
            </div>
            {/*<Profile/>*/}
        </div>
    );
}


export default App;
