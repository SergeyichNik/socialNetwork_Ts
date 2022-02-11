import React from "react";
import classes from "../Dialogs.module.css";

type MessageType = {
    message: string,
    id: number
}

export const Message: React.FC<MessageType> = ({message, id}) => {
    return <ul key={id} className={classes.message}>{message}</ul>
}