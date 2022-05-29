import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import axios from "axios";
import {Users} from "./Users";
import {selectFromUsersReducer} from "../../redux/usersReducer";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleIsFetchingAC, unfollowAC
} from "../../redux/action-creator/ActionCreator";
import {Preloader} from "../common/Preloader";
import {apiUsers} from "../../api/api";

const  UsersContainer = () => {

    const dispatch = useDispatch()
    const {
        pageSize,
        users,
        currentPage,
        isFetching,
        totalUsersCount,
    } = useSelector(selectFromUsersReducer)

    useEffect(() => {
        dispatch(toggleIsFetchingAC(true));
        if (users.length === 0) {
            apiUsers.getUsers(currentPage, pageSize)
                .then(response => {
                    dispatch(toggleIsFetchingAC(false));
                    dispatch(setUsersAC(response.data.items));
                    dispatch(setTotalUsersCountAC(response.data.totalCount))
                })
        }

    }, []);

    const onCurrentPageChange = (page: number) => {
        dispatch(toggleIsFetchingAC(true))
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${pageSize}`)
            .then(response => {
                dispatch(toggleIsFetchingAC(false));
                dispatch(setUsersAC(response.data.items));
            })
        dispatch(setCurrentPageAC(page))
    }

    const onUnfollowClick = (userId: number) => {
        dispatch(unfollowAC(userId))
    }

    const onFollowClick = (userId: number) => {
        dispatch(followAC(userId))
    }

    return (
        <>
            {isFetching && <Preloader/>}
            <Users users={users}
                   totalUsersCount={totalUsersCount}
                   pageSize={pageSize}
                   currentPage={currentPage}
                   onUnfollowClick={onUnfollowClick}
                   onFollowClick={onFollowClick}
                   onCurrentPageChange={onCurrentPageChange}
            />
        </>
    )

}

export { UsersContainer }
