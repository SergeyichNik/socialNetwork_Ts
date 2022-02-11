import classes from "./Dialogs.module.css";
import React from "react";
import {Message} from "./Message/Message";
import {DialogsItem} from "./DialogItem/DialogsItem";
import {dialogsDataType, messagesDataType} from "../..";


type propsType = {
    dialogsData: dialogsDataType[],
    messagesData: messagesDataType[]
}


export const Dialogs = (props: propsType) => {
    const {dialogsData, messagesData} = props
    return (
        <div className={classes.dialogs}>
            <ul className={classes.dialogsItems}>
                {dialogsData.map((item) => {
                    return (
                        <DialogsItem name={item.name} id={item.id}/>
                    )
                })}
            </ul>
            <ul className={classes.messages}>
                {messagesData.map((item) => {
                    return (
                        <Message message={item.message} id={item.id}/>
                    )
                })}
            </ul>
        </div>
    )
}