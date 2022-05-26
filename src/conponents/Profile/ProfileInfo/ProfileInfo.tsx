import classes from "./ProfileInfo.module.css";
import React from "react";
import {useSelector} from "react-redux";
import {selectFromProfileReducer} from "../../../redux/profileReducer";


export const ProfileInfo = () => {

    const profile = useSelector(selectFromProfileReducer)

    return (
        <div>

            <img className={classes.mainContentImg} src='https://thumbs.dreamstime.com/b/winter-header-banner-3532254.jpg' alt='content-img'/>
            <img className={classes.avatar} src={profile?.photos?.small} alt='avatar'/>
            <p>{profile?.fullName}</p>
            <p>{profile?.aboutMe}</p>
        </div>
    )
}
