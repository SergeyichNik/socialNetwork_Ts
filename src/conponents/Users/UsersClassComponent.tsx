import React from "react";
import {UsersDataType} from "../../redux/usersReducer";
import classes from "./Users.module.css";
import avatar from "../../assets/images/avatar.png";
import axios from "axios";

type PropsType = {
    users: UsersDataType[]
    onUnfollowClick: (userId: number) => void
    onFollowClick: (userId: number) => void
    setUsers: (users: UsersDataType[]) => void
    setCurrentPage: (page: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

class UsersClassComponent extends React.Component<PropsType> {

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => this.props.setUsers(response.data.items))
        }
    }

    onCurrentPageChange(page: number) {
        this.props.setCurrentPage(page)
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => this.props.setUsers(response.data.items))
    }

    render() {
        const {pageSize, totalUsersCount, currentPage, setCurrentPage} = this.props

        const pageCount = Math.ceil(totalUsersCount / pageSize)
        let arrPages = []
        for (let i = 1; i <= pageCount; i++) {
            arrPages.push(i)
        }

        return (
            <div className={classes.container}>
                {arrPages.map(item => <span onClick={() => setCurrentPage(item)} className={currentPage === item ? classes.selectedPage : ''} key={item}>{item}</span>)}
                {this.props.users.map(item => {

                    const onUnfollowClickHandler = () => {
                        this.props.onUnfollowClick(item.id)
                    }
                    const onFollowClickHandler = () => {
                        this.props.onFollowClick(item.id)
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
}

export default UsersClassComponent;