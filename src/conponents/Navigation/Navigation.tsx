import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Navigation.module.css';

const Navigation = () => {
    return (
        <div className={classes.appNav}>

            <div>
                <NavLink className={classes.link} to={'/Profile'}>Profile</NavLink>
            </div>

            <div>
                <NavLink className={classes.link} to={'/Dialogs'}>Messages</NavLink>
            </div>

            <div>
                <NavLink className={classes.link} to={'/News'}>News</NavLink>
            </div>

            <div>
                <NavLink className={classes.link} to={'/Music'}>Music</NavLink>
            </div>
            <NavLink className={classes.link} to={'/Settings'}>Settings</NavLink>
        </div>
    )
}

export default Navigation;