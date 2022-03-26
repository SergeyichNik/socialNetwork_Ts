import React, {FC} from 'react';

import './App.css';
import Header from "./conponents/Header/Header";
import Navigation from "./conponents/Navigation/Navigation";
import Profile from "./conponents/Profile/Profile";
import {Dialogs} from "./conponents/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {Music} from "./conponents/Music/Music";
import {News} from "./conponents/News/News";
import {Settings} from "./conponents/Settings/Settings";
import {ActionType, dialogsDataType, messagesDataType, postDataType} from "./redux/store";
import {MessageArea} from "./conponents/Dialogs/Message/MessageArea/MessageArea";
import classes from "./conponents/Dialogs/Dialogs.module.css";



type StateType = {
    appState: {
        profilePage: {
            postData: postDataType[],
            newPostMessage: string
        },
        dialogsPage: {
            dialogsData: dialogsDataType[],
            messagesData: messagesDataType[],
            newMessageBody: string
        }
    },
    dispatch: (action: ActionType) => void,
}


const App: FC<StateType> = ({appState, dispatch}) => {

    const {profilePage, dialogsPage} = appState

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navigation/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path={'/Dialogs/*'} element={<Dialogs state={dialogsPage}/>}/>
                    <Route path={'/Dialogs/Messages/*'} element={(
                        <div className={classes.dialogs}>
                            <Dialogs state={dialogsPage}/>
                            <div >
                                <MessageArea messagesData={dialogsPage.messagesData}
                                             value={dialogsPage.newMessageBody}
                                             dispatch={dispatch}/>
                            </div>
                        </div>
                    )}/>
                    <Route path={'/Profile'}
                           element={<Profile
                               state={profilePage}
                               dispatch={dispatch}
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
