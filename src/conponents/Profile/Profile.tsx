import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className='app-main-content'>
            <div>
                <img className={classes.mainContentImg} src='https://thumbs.dreamstime.com/b/winter-header-banner-3532254.jpg' alt='content-img'/>
            </div>
            <div>
                <div>
                    <img className={classes.avatar} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQwWMJbZoZ26ZyYB8M-1e7OLBVUWXRLNSO6A&usqp=CAU' alt='avatar'/>
                </div>
                <MyPosts/>
            </div>
        </div>
    )
}

export default Profile;