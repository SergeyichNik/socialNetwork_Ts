import classes from "./Dialogs.module.css";
import React, {FC} from "react";
import {DialogsItem} from "./DialogItem/DialogsItem";
import {NavLink} from "react-router-dom";
import {MessageArea} from "./Message/MessageArea/MessageArea";
import {DialogsPageType} from "../../redux/dialogs-reducer";



type PropsType = {
    dialogsPage: DialogsPageType
    sendMessage: () => void
    updateNewMessageBody: (text: string) => void
}


export const Dialogs: FC<PropsType> = (props) => {
    const {dialogsPage, updateNewMessageBody, sendMessage} = props

    const dialogsMap = dialogsPage.dialogsData.map((item) => {
        return (
            <NavLink key={item.id} to={`/Dialogs/Messages/${item.id}`}>
                <DialogsItem key={item.id} name={item.name} id={item.id} avatar={item.avatar}/>
            </NavLink>
        )
    })

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsMap}
            </div>
            <MessageArea messagesData={dialogsPage.messagesData}
                         value={dialogsPage.newMessageBody}
                         updateNewMessageBody={updateNewMessageBody}
                         sendMessage={sendMessage}/>
        </div>
    )
}