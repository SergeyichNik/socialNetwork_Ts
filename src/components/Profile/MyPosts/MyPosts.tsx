import React, {FC} from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {ProfilePageType} from "../../../redux/profile-reducer";


type PropsType = {
    updateNewPostText: (text: string) => void
    profilePage: ProfilePageType
    addPost: () => void,
}

export const MyPosts: FC<PropsType> = (props) => {
    const {addPost, updateNewPostText, profilePage} = props

    const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        updateNewPostText(e.currentTarget.value)
    }

    let onClickHandler = () => {
        addPost()
    }

    return (
        <div>
            My posts
            <div>
                <textarea value={profilePage.newPostMessage} onChange={onChangeHandler}/>
                <button onClick={onClickHandler}>Add post</button>
            </div>
            <div className={classes.posts}>
                {profilePage.postData.map((item) => {
                    return (
                        <Post key={item.id} message={item.message} id={item.id} likes={item.likesCount}/>
                    )
                })}
            </div>
        </div>
    )
}

