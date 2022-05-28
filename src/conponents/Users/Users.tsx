import classes from "./Users.module.css";
import {UsersDataType} from "../../redux/usersReducer";
import React, {FC} from "react";
import avatar from "../../assets/images/avatar.png"
import {Link} from "react-router-dom";
import axios from "axios";

type PropsType = {
    users: UsersDataType[]
    onUnfollowClick: (userId: number) => void
    onFollowClick: (userId: number) => void
    onCurrentPageChange: (page: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
}


export const Users: FC<PropsType> = (props) => {

    const {
        users,
        onCurrentPageChange,
        onUnfollowClick,
        onFollowClick,
        totalUsersCount,
        pageSize,
        currentPage,
    } = props

    const pageCount = Math.ceil(totalUsersCount / pageSize)

    let arrPages = []
    for (let i = 1; i <= pageCount; i++) {
        arrPages.push(i)
    }

    return (
        <div>
            {arrPages.map(item => <span
                onClick={() => onCurrentPageChange(item)}
                className={currentPage === item ? classes.selectedPage : ''}
                key={item}>{item}</span>)}
            {users.map(item => {

                const onUnfollowClickHandler = () => {
                    onUnfollowClick(item.id)
                }
                const onFollowClickHandler = () => {
                    onFollowClick(item.id)
                }

                return (
                    <div key={item.id} className={classes.user}>
                        <div className={classes.imgBtn}>
                            <Link to={`/profile/${item.id}`}>
                                <img src={item.photos.small
                                    ? item.photos.small
                                    : avatar} alt="avatar"/>
                            </Link>
                            {item.followed
                                ? <button onClick={() => {
                                    axios.delete(
                                        `https://social-network.samuraijs.com/api/1.0/follow/${item.id}`,
                                        {
                                            withCredentials: true,
                                            headers: {
                                                "API-Key": "17f3fe98-a96f-4c1a-a7eb-bebd7f1cb8ea"
                                            }
                                        })
                                        .then(res => {
                                            if (res.data.resultCode === 0) {
                                                onUnfollowClickHandler()
                                            }
                                        })}}>Unfollow</button>
                                : <button onClick={() => {
                                    axios.post(
                                        `https://social-network.samuraijs.com/api/1.0/follow/${item.id}`,
                                        {},
                                        {
                                            withCredentials: true,
                                            headers: {
                                                "API-Key": "17f3fe98-a96f-4c1a-a7eb-bebd7f1cb8ea"
                                            }
                                        })
                                        .then(res => {
                                            if (res.data.resultCode === 0) {
                                                onFollowClickHandler()
                                            }
                                        })
                                }}>Follow</button>}
                        </div>
                        <div className={classes.text}>
                            <div className={classes.textItem}>
                                <div className={classes.name}>{item.name}</div>
                                <div>{item.status}</div>
                            </div>
                            <div className={classes.textItem}>
                                <div>{item.location
                                    ? item.location.country
                                    : 'No country'}</div>
                                <div>{item.location
                                    ? item.location.city
                                    : 'No city'}</div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )

}