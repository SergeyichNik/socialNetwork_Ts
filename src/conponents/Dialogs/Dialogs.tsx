import classes from "./Dialogs.module.css";
import React from "react";
import {Message} from "./Message/Message";
import {DialogsItem} from "./DialogItem/DialogsItem";
import {dialogsDataType, messagesDataType} from "../../redux/state";
import {NavLink, Route, Routes} from "react-router-dom";



type propsType = {
    state: {
        dialogsData: dialogsDataType[],
        messagesData: messagesDataType[]
    }
}


export const Dialogs = (props: propsType) => {
    const {dialogsData, messagesData} = props.state
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsData.map((item) => {
                    return (
                        <NavLink key={Math.random()} to={`/Dialogs/Messages/${item.id}`}>
                            <DialogsItem key={item.id} name={item.name} id={item.id} avatar={item.avatar}/>
                        </NavLink>

                    )
                })}
            </div>
        </div>
    )
}