import React, {FC} from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Layout, Login, ProfileContainer, UsersContainer} from "./components";
import {RequireAuth} from "./hocs/RequireAuth";
import {DIALOGS, LOGIN, MUSIC, NEWS, PROFILE, PROFILE_USER_ID, ROOT_ROUTE, SETTINGS, USERS} from "./constants";

const App: FC = () => {

    return (
        <>
            <Routes>
                <Route path={ROOT_ROUTE} element={<Layout/>}>
                    <Route path={PROFILE} element={
                        <RequireAuth>
                            <ProfileContainer/>
                        </RequireAuth>
                    }/>
                    <Route path={PROFILE_USER_ID} element={<ProfileContainer/>}/>
                    <Route path={DIALOGS} element={
                        <RequireAuth>
                            <DialogsContainer/>
                        </RequireAuth>
                    }/>
                    <Route path={USERS} element={
                        <RequireAuth>
                            <UsersContainer/>
                        </RequireAuth>
                    }/>
                    <Route path={NEWS} element={<News/>}/>
                    <Route path={MUSIC} element={<Music/>}/>
                    <Route path={SETTINGS} element={<Settings/>}/>
                    <Route path={LOGIN} element={<Login/>}/>
                </Route>
            </Routes>
        </>
    );
}


export default App;
