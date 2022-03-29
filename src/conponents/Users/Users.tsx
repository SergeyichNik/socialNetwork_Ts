import classes from "./Users.module.css";
import {UsersDataType} from "../../redux/usersReducer";
import {FC} from "react";
import axios from "axios";
import avatar from "../../assets/images/avatar.png"

type PropsType = {
    usersPage: UsersDataType[]
    onUnfollowClick: (userId: number) => void
    onFollowClick: (userId: number) => void
    setUsers: (users: UsersDataType[]) => void
}


export const Users: FC<PropsType> = (props) => {
    const {usersPage, onUnfollowClick, onFollowClick, setUsers} = props

    const users: UsersDataType[] = [
        {followed: false,
            id: 2323,
            name: 'Rastislav',
            photos:{
                small: ' https://cdn-icons-png.flaticon.com/512/147/147144.png'
            },
            status: 'my status is status',
            location: {country: 'Russia', city: 'Moscow'},
        },
    ]
     
    if (usersPage.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => setUsers(response.data.items))

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
                            : 'No country'
                        }</div>
                        <div>{item.location
                            ? item.location.city
                            : 'No city'}</div>
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