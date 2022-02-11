import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

type PostDataType = {
    id: number,
    message: string,
    likesCount: number
}
type propsType = {
    postData: PostDataType[]
}

export const MyPosts = (props: propsType) => {
    const {postData} = props
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                {postData.map((item: PostDataType) => {
                    return(
                        <Post message={item.message} id={item.id} likes={item.likesCount}/>
                    )
                })}
            </div>
        </div>
    )
}

