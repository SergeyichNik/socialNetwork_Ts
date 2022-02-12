import React from "react";
import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogsItemType = {
    name: string,
    id: number
    avatar: string
}

export const DialogsItem: React.FC<DialogsItemType> = ({name, id, avatar}) => {
    return (
        <div key={id} className={classes.dialog + ' ' + classes.active}>
            <img src={avatar} alt={'avatar'}/>
            <div>{name}</div>
        </div>
    )
}