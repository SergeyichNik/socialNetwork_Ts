import classes from "./Post.module.css";
import React from "react";

type textMess = {
    message: string
    id: number
    likes: number
}

const Post = (props: textMess) => {
    return(
        <div key={props.id} className={classes.item}>
            <img src='https://www.pngall.com/wp-content/uploads/12/Avatar-Profile.png' alt='avatar'/>
            {props.message}
            <div>
                <span>{`likes ${props.likes}`}</span>
            </div>
        </div>
    )
}

export default Post;