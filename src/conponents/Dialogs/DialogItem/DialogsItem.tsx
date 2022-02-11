import React from "react";
import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogsItemType = {
    name: string,
    id: number
}

export const DialogsItem: React.FC<DialogsItemType> = ({name, id}) => {
    return (
        <li key={id} className={classes.dialog + ' ' + classes.active}>
            <NavLink to={`/Dialogs/${id}`}>{name}</NavLink>
        </li>
    )
}