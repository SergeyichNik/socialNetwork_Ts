import React from "react";
import classes from "../Dialogs.module.css";

type MessageType = {
    message: string,
    id: string
}

export const Message: React.FC<MessageType> = ({message, id}) => {
    return (
            <div key={id} className={classes.message}>{message}</div>
        )

}