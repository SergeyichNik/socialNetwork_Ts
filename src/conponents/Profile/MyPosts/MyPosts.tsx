import React, {FC, useState} from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {ActionType, addPostAC, postDataType, updatePostAC} from "../../../redux/state";

type PropsType = {
    postData: postDataType[],
    newPostMessage: string,
    dispatch: (action: ActionType) => void,
}

export const MyPosts: FC<PropsType> = ({postData, newPostMessage, dispatch}) => {

    const [post, setPost] = useState(newPostMessage)


    const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPost(e.target.value)
        dispatch(updatePostAC(post))
    }

    let onClickHandler = () => {
        dispatch(addPostAC())
        setPost(newPostMessage)
    }

    return (
        <div>
            My posts
            <div>
                <textarea value={post} onChange={onChangeHandler}/>
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

