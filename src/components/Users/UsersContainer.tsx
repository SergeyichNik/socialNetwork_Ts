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
import {apiUsers} from "../../api";
import {followingInProgressAC} from "../../redux/action-creator/ActionCreator";

const  UsersContainer = () => {

    const dispatch = useDispatch()
    const {
        pageSize,
        users,
        currentPage,
        isFetching,
        totalUsersCount,
        followingInProgress,
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

    const toggleFollowingInProgress = (isFetching: boolean, id: number) => {
        dispatch(followingInProgressAC(isFetching, id))
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
                   followingInProgress={followingInProgress}
                   toggleFollowingInProgress={toggleFollowingInProgress}
            />
        </>
    )

}

export { UsersContainer }
