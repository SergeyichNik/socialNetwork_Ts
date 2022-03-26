import React, {FC} from 'react';

import './App.css';
import Header from "./conponents/Header/Header";
import Navigation from "./conponents/Navigation/Navigation";
import Profile from "./conponents/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {Music} from "./conponents/Music/Music";
import {News} from "./conponents/News/News";
import {Settings} from "./conponents/Settings/Settings";
import {ActionType,StateType} from "./redux/store";
import {DialogsContainer} from "./conponents/Dialogs/DialogsContainer";



type PropsType = {
    store: {
       getState: () => StateType,
       dispatch: (action: ActionType) => void
    }
}


const App: FC<PropsType> = ({store}) => {


    return (
        <div className='app-wrapper'>
            <Header/>
            <Navigation/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path={'/Dialogs/*'} element={<DialogsContainer store={store}/>}/>
                    <Route path={'/Profile'} element={<Profile store={store}/>}/>
                    <Route path={'/News'} element={<News/>}/>
                    <Route path={'/Music'} element={<Music/>}/>
                    <Route path={'/Settings'} element={<Settings/>}/>
                </Routes>
            </div>

        </div>
    );
}


export default App;
