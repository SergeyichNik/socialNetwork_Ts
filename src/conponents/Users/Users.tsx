import classes from "./Users.module.css";
import {UsersDataType} from "../../redux/usersReducer";
import React, {FC} from "react";
import avatar from "../../assets/images/avatar.png"

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
                            <img src={item.photos.small
                                ? item.photos.small
                                : avatar} alt="avatar"/>
                            {item.followed
                                ? <button onClick={onUnfollowClickHandler}>Unfollow</button>
                                : <button onClick={onFollowClickHandler}>Follow</button>}
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