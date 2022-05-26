import React, {FC} from 'react';

import './App.css';
import Header from "./conponents/Header/Header";
import Navigation from "./conponents/Navigation/Navigation";
import {Route, Routes} from "react-router-dom";
import {Music} from "./conponents/Music/Music";
import {News} from "./conponents/News/News";
import {Settings} from "./conponents/Settings/Settings";
import DialogsContainer from "./conponents/Dialogs/DialogsContainer";
import {UsersContainer} from "./conponents/Users/UsersContainer";
import {ProfileContainer} from "./conponents";

const App: FC = () => {


    return (
        <div className='app-wrapper'>
            <Header/>
            <Navigation/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path={'/Dialogs'} element={<DialogsContainer />}/>
                    <Route path={'/Profile/'} element={<ProfileContainer/>}/>
                    <Route path={'/Users'} element={<UsersContainer/>}/>
                    <Route path={'/News'} element={<News/>}/>
                    <Route path={'/Music'} element={<Music/>}/>
                    <Route path={'/Settings'} element={<Settings/>}/>
                </Routes>
            </div>

        </div>
    );
}


export default App;
