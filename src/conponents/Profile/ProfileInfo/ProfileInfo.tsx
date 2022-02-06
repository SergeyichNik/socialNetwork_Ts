import classes from "./ProfileInfo.module.css";
import React from "react";


export const ProfileInfo = () => {
    return (
        <div>

            <img className={classes.mainContentImg} src='https://thumbs.dreamstime.com/b/winter-header-banner-3532254.jpg' alt='content-img'/>
            <img className={classes.avatar} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQwWMJbZoZ26ZyYB8M-1e7OLBVUWXRLNSO6A&usqp=CAU' alt='avatar'/>
            <p>Name + descr</p>
        </div>
    )
}
