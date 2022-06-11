import React from 'react';
import classes from "./Layout.module.css";
import {HeaderContainer} from "../header";
import {Outlet} from "react-router-dom";
import {Navigation} from "../navigation";

export const Layout = () => {
    return (
        <div className={classes.appWrapper}>
            <HeaderContainer/>
            <Navigation/>
            <div className='app-wrapper-content'>
                <Outlet/>
            </div>
        </div>
    );
};
