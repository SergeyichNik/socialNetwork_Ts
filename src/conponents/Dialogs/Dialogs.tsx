import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogsItemType = {
    name: string,
    id: number
}

type MessageType = {
    message: string
}

const DialogsItem: React.FC<DialogsItemType> = ({name, id}) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={`/Dialogs/${id}`}>{name}</NavLink>
        </div>
    )
}

const Message: React.FC<MessageType> = ({message})=> {
    return <div className={classes.message}>{message}</div>
}

export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogsItem name={'Dima'} id={0}/>
                <DialogsItem name={'Valera'} id={1}/>
                <DialogsItem name={'Sveta'} id={2}/>
                <DialogsItem name={'Pavel'} id={3}/>
                <DialogsItem name={'Ilon'} id={4}/>
            </div>
            <div className={classes.messages}>
                <Message message={'How are you?0'}/>
                <Message message={'How are you?1'}/>
                <Message message={'How are you?2'}/>
                <Message message={'How are you?3'}/>
                <Message message={'How are you?4'}/>

            </div>

        </div>
    )
}