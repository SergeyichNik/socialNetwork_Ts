import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {Users} from "./Users";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleIsFetchingAC,
    unfollowAC,
    selectFromUsersReducer
} from "../../redux";
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
                .then(res => {
                    dispatch(toggleIsFetchingAC(false));
                    dispatch(setUsersAC(res.items));
                    dispatch(setTotalUsersCountAC(res.totalCount))
                })
        }

    }, []);

    const onCurrentPageChange = (page: number) => {
        dispatch(toggleIsFetchingAC(true))
        apiUsers.getUsers(page, pageSize)
            .then(res => {
                dispatch(toggleIsFetchingAC(false));
                dispatch(setUsersAC(res.items));
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
