import classes from "./ProfileInfo.module.css";
import React from "react";
import {useSelector} from "react-redux";
import {selectFromProfileReducer} from "../../../store/profile-reducer";
import avatarPlug from "../../../assets/images/avatar.png"
import {ProfileStatus} from "../profile-status";


export const ProfileInfo =
    ({
         status,
         updateUserStatus,
         isOwner
     }: {
        status: string,
        updateUserStatus: (status: string) => void,
        isOwner: boolean
    }) => {

        const profile = useSelector(selectFromProfileReducer)

        let avatar = profile?.photos?.small !== null ? profile?.photos?.small : avatarPlug

        return (
            <div className={classes.wrapper}>
                <img className={classes.mainContentImg}
                     src='https://thumbs.dreamstime.com/b/winter-header-banner-3532254.jpg' alt='content-img'/>
                <img className={classes.avatar} src={avatar} alt='avatar'/>
                <h3 className={classes.name}>{profile?.fullName}</h3>
                <p className={classes.aboutMe}>{profile?.aboutMe}</p>
                <ProfileStatus isOwner={isOwner} updateUserStatus={updateUserStatus} status={status}/>
            </div>
        )
    }
