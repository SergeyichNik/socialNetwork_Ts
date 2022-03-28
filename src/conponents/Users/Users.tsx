import classes from "./Users.module.css";
import {UsersDataType} from "../../redux/usersReducer";
import {FC} from "react";
import {v1} from "uuid";

type PropsType = {
    usersPage: UsersDataType[]
    onUnfollowClick: (userId: string) => void
    onFollowClick: (userId: string) => void
    setUsers: (users: ({ userImg: string; location: { country: string; city: string }; id: string; userName: string; isFollowed: boolean; status: string } | { userImg: string; location: { country: string; city: string }; id: string; userName: string; isFollowed: boolean; status: string } | { userImg: string; location: { country: string; city: string }; id: string; userName: string; isFollowed: boolean; status: string })[]) => void
}


export const Users: FC<PropsType> = (props) => {
    const {usersPage, onUnfollowClick, onFollowClick, setUsers} = props

    const users = [
        {id: v1(), userName: 'Rastislav', status: 'my status is status',
            userImg:' https://cdn-icons-png.flaticon.com/512/147/147144.png',
            isFollowed: false, location: {country: 'Russia', city: 'Moscow'} },
        {id: v1(), userName: 'Bratislav', status: 'my status is status',
            userImg:' https://cdn-icons-png.flaticon.com/512/147/147144.png',
            isFollowed: true, location: {country: 'Belarus', city: 'Minsk'} },
        {id: v1(), userName: 'Vladislav', status: 'my status is status',
            userImg:' https://cdn-icons-png.flaticon.com/512/147/147144.png',
            isFollowed: false, location: {country: 'Uzbekistan', city: 'Samarkand'} }
    ]
    if (usersPage.length === 0) {
        setUsers(users)
    }

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
                        <div className={classes.name}>{item.userName}</div>
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