import React from "react";
import {NavLink} from "react-router-dom";
import classes from './Navigation.module.css';

const Navigation = () => {
    return (
        <div className={classes.appNav}>

            <div>
                <NavLink className={navData => navData.isActive ? classes.active : classes.item}
                         to={'/Profile'}>Profile</NavLink>
            </div>

            <div>
                <NavLink className={navData => navData.isActive ? classes.active : classes.item}
                         to={'/Dialogs'}>Messages</NavLink>
            </div>

            <div>
                <NavLink className={navData => navData.isActive ? classes.active : classes.item}
                         to={'/News'}>News</NavLink>
            </div>

            <div>
                <NavLink className={navData => navData.isActive ? classes.active : classes.item}
                         to={'/Music'}>Music</NavLink>
            </div>
            <NavLink className={navData => navData.isActive ? classes.active : classes.item}
                     to={'/Settings'}>Settings</NavLink>
        </div>
    )
}

export default Navigation;