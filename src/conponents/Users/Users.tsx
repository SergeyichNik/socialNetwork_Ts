import classes from "./Users.module.css";
import {UsersDataType} from "../../redux/usersReducer";
import {FC} from "react";

type PropsType = {
    usersPage: UsersDataType[]
    onUnfollowClick: (userId: string) => void
    onFollowClick: (userId: string) => void
}


export const Users: FC<PropsType> = ({usersPage, onUnfollowClick, onFollowClick}) => {

    const usersMap = usersPage.map(item => {

        const onUnfollowClickHandler = () => {
             onUnfollowClick(item.id)
        }
        const onFollowClickHandler = () => {
            onFollowClick(item.id)
        }

        return (
            <div key={item.id} className={classes.user}>
                <div className={classes.imgBtn}>
                    <img src={item.userImg} alt="avatar"/>
                    {item.isFollowed
                        ? <button onClick={onUnfollowClickHandler}>Unfollow</button>
                        : <button onClick={onFollowClickHandler}>Follow</button>}
                </div>
                <div className={classes.text}>
                    <div className={classes.textItem}>
                        <div>{item.userName}</div>
                        <div>{item.status}</div>
                    </div>
                    <div className={classes.textItem}>
                        <div>{item.location.country}</div>
                        <div>{item.location.city}</div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className={classes.container}>
            {usersMap}
        </div>
    )
}