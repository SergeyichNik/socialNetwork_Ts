import React, {FC, useState} from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {postDataType} from "../../../redux/store";

type PropsType = {
    postData: postDataType[],
    updateNewPostText: (text: string) => void
    newPostMessage: string,
    addPost: () => void,
}

export const MyPosts: FC<PropsType> = (props) => {
    const {postData, newPostMessage, addPost, updateNewPostText} = props

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
                <textarea value={newPostMessage} onChange={onChangeHandler}/>
                <button onClick={onClickHandler}>Add post</button>
            </div>
            <div className={classes.posts}>
                {postData.map((item) => {
                    return (
                        <Post key={item.id} message={item.message} id={item.id} likes={item.likesCount}/>
                    )
                })}
            </div>
        </div>
    )
}

