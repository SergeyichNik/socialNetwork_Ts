import React from "react";
import classes from './Header.module.css';
import {Link} from "react-router-dom";

type PropsType = {
    isAuth: boolean,
    login: string | null
}

const Header = (props: PropsType) => {

    return (
            <header className={classes.header}>
                <img className={classes.headerImg} src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png' alt='logo'/>
                <div className={classes.loginBlock}>

                    {props.isAuth
                        ? <div className={classes.userLogin}>{props.login}</div>
                        : <Link to={"/login"}>Login</Link>
                    }


                </div>
            </header>
    )
}

export { Header };