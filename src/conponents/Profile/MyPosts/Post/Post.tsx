import classes from "./Post.module.css";
import React from "react";

type textMess = {
    message: string
}

const Post = (props: textMess) => {
    return(
        <div className={classes.item}>
            <img src='https://www.pngall.com/wp-content/uploads/12/Avatar-Profile.png' alt='avatar'/>
            {props.message}
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post;