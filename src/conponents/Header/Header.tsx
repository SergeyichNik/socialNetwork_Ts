import React from "react";
import classes from './Header.module.css';
import {Link} from "react-router-dom";


const Header = () => {

    return (
            <header className={classes.header}>
                <img className={classes.headerImg} src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png' alt='logo'/>
                <div className={classes.loginBlock}>
                    <Link to={"/login"}>Login</Link>
                </div>
            </header>
    )
}

export { Header };