import classes from "./ProfileInfo.module.css";
import React from "react";
import {useSelector} from "react-redux";
import {selectFromProfileReducer} from "../../../redux/profileReducer";
import avatarPlug from "../../../assets/images/avatar.png"


export const ProfileInfo = () => {

    const profile = useSelector(selectFromProfileReducer)

    return (
        <div className={classes.wrapper}>

            <img className={classes.mainContentImg} src='https://thumbs.dreamstime.com/b/winter-header-banner-3532254.jpg' alt='content-img'/>
            <img className={classes.avatar} src={profile ? profile?.photos?.small : avatarPlug} alt='avatar'/>
            <h3 className={classes.name}>{profile?.fullName}</h3>

            <p className={classes.aboutMe}>{profile?.aboutMe}</p>
        </div>
    )
}
