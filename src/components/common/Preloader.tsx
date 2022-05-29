import React from "react";
import classes from "./Preloader.module.css";
import preloader from "../../assets/images/1492.gif"

export const Preloader = () => {
    return(
        <div className={classes.preloader}>
            <img src={preloader} alt="loader"/>
        </div>
    )
}