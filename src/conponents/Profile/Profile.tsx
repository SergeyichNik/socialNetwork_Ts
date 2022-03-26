import React, {FC} from "react";
import classes from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionType, postDataType} from "../../redux/state";

type PropsType = {
    state: {
        postData: postDataType[],
        newPostMessage: string
    },
    dispatch: (action: ActionType) => void
}

const Profile: FC<PropsType> = ({state, dispatch}) => {
    const {postData, newPostMessage} = state
    return (
        <div>

            <ProfileInfo/>
            <MyPosts postData={postData}
                     newPostMessage={newPostMessage}
                     dispatch={dispatch}

            />

        </div>
    )
}

export default Profile;