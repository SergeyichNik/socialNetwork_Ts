import React from "react";
import classes from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type PostDataType = {
    id: number,
    message: string,
    likesCount: number
}
type propsType = {
    postData: PostDataType[]
}

const Profile = (props: propsType) => {
    const {postData} = props
    return (
        <div>

            <ProfileInfo/>
            <MyPosts postData={postData}/>

        </div>
    )
}

export default Profile;