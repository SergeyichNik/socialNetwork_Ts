import React, {FC} from "react";
import {useMatch} from "react-router-dom";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {PROFILE} from "../../constants";
import {ProfileInfo} from "./profile-info";
import {selectProfileReducer_UserStatus, updateUserStatusTC} from "../../store";
import {useDispatch, useSelector} from "react-redux";

const Profile: FC = () => {
    const status = useSelector(selectProfileReducer_UserStatus)

    const dispatch = useDispatch()

    const match = useMatch(PROFILE)

    const updateUserStatus = (status: string) => {
        dispatch(updateUserStatusTC(status))
    }

    if (match) {
        return (
            <>
                <ProfileInfo isOwner={true} updateUserStatus={updateUserStatus} status={status}/>
                <MyPostsContainer/>
            </>
        )
    }

    return (
        <>
            <ProfileInfo isOwner={false} updateUserStatus={updateUserStatus} status={status}/>
        </>
    )
}

export default Profile;