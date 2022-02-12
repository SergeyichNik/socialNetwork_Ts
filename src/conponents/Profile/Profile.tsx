import React from "react";
import classes from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {postDataType} from "../../redux/state";

type stateType = {
    state: {
        postData: postDataType[],
        newPostMessage: string
    },
    addPost: () => void,
    setNewPostMessage: (text: string) => void
}

const Profile = (props: stateType) => {
    const {postData, newPostMessage} = props.state
    const {addPost, setNewPostMessage} = props
    return (
        <div>

            <ProfileInfo/>
            <MyPosts postData={postData}
                     newPostMessage={newPostMessage}
                     addPost={addPost}
                     setNewPostMessage={setNewPostMessage}

            />

        </div>
    )
}

export default Profile;