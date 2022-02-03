import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";



const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                <Post message ={'hi'}/>
                <Post message={'how are you'}/>
            </div>
        </div>
    )
}

export default MyPosts;