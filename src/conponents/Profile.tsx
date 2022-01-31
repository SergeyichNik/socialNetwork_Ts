import React from "react";
import classes from './Profile.module.css';

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
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div>
                        <div>
                            post1
                        </div>
                        <div>
                            post2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;