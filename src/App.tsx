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
import {dialogsDataType, messagesDataType, PostDataType} from "./index";


type propsType = {
    postData: PostDataType[],
    dialogsData: dialogsDataType[],
    messagesData: messagesDataType[]
}


function App(props: propsType) {
    const {postData, dialogsData, messagesData} = props
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navigation/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path={'/Dialogs'}
                           element={<Dialogs dialogsData={dialogsData} messagesData={messagesData}/>}/>
                    <Route path={'/Profile'} element={<Profile postData={postData}/>}/>
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
