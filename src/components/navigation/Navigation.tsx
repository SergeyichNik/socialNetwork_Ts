import React from "react";
import classes from './Navigation.module.css';
import {CustomLink} from "../custom-link";
import {DIALOGS, MUSIC, NEWS, PROFILE, SETTINGS, USERS} from "../../constants";

export const Navigation = () => {
    return (
        <div className={classes.appNav}>
            <CustomLink to={PROFILE}>Profile</CustomLink>
            <CustomLink to={DIALOGS}>Messages</CustomLink>
            <CustomLink to={USERS}>Users</CustomLink>
            <CustomLink to={NEWS}>News</CustomLink>
            <CustomLink to={MUSIC}>Music</CustomLink>
            <CustomLink to={SETTINGS}>Settings</CustomLink>
        </div>
    )
}

