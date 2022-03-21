import React, {useState} from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {postDataType} from "../../../redux/state";

type stateType = {
    postData: postDataType[],
    newPostMessage: string,
    addPost: () => void,
    setNewPostMessage: (text: string) => void
}

export const MyPosts = (props: stateType) => {
    const {postData, addPost, setNewPostMessage, newPostMessage} = props

    const [post, setPost] = useState(newPostMessage)


    const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPost(e.target.value)
        setNewPostMessage(post)
    }

    let onClickHandler = () => {
        addPost()
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

