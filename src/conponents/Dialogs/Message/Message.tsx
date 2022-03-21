import React from "react";
import {Route, Routes } from "react-router-dom";
import classes from "../Dialogs.module.css";

type MessageType = {
    message: string,
    id: number
}

export const Message: React.FC<MessageType> = ({message, id}) => {
    return (
            <div key={id} className={classes.message}>{message}</div>
        )

}