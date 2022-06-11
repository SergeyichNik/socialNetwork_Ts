import React, {FC} from "react";
import {useMatch} from "react-router-dom";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {PROFILE} from "../../constants";
import {ProfileInfo} from "./profile-info";

const Profile: FC = () => {

    const match = useMatch(PROFILE)

    if (match) {
        return (
            <>
                <ProfileInfo/>
                <MyPostsContainer/>
            </>
        )
    }

    return (
        <>
            <ProfileInfo/>
        </>
    )
}

export default Profile;