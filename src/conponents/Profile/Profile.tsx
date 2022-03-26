import React, {FC} from "react";
import classes from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionType, dialogsDataType, messagesDataType, postDataType, StateType} from "../../redux/store";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";

type PropsType = {
    store: {
        getState: () => StateType,
        dispatch: (action: ActionType) => void
    }
}

const Profile: FC<PropsType> = ({store}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={store}/>
        </div>
    )
}

export default Profile;