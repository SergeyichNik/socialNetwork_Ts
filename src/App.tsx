import React, {FC} from 'react';

import './App.css';

import Navigation from "./components/Navigation/Navigation";
import {Route, Routes} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

import {HeaderContainer, Login, ProfileContainer, UsersContainer} from "./components";
import {RequireAuth} from "./hocs/RequireAuth";

const App: FC = () => {


    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navigation/>
            <div className='app-wrapper-content'>
                <Routes>

                    <Route path={'/Dialogs'} element={<DialogsContainer />}/>
                    <Route path={'profile'}>
                        <Route path={':userID'} element={<ProfileContainer/>}/>
                    </Route>

                    <Route path={'/Users'} element={
                        <RequireAuth>
                            <UsersContainer/>
                        </RequireAuth>
                    }/>
                    <Route path={'/News'} element={<News/>}/>
                    <Route path={'/Music'} element={<Music/>}/>
                    <Route path={'/Settings'} element={<Settings/>}/>
                    <Route path={'/login'} element={<Login/>}/>

                </Routes>
            </div>

        </div>
    );
}


export default App;
