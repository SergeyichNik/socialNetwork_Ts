import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {Users} from "./Users";
import {selectFromUsersReducer, setCurrentPageAC, setUsersAC, toggleIsFetchingAC} from "../../store";
import {Preloader} from "../common/Preloader";
import {apiUsers} from "../../api";
import {fetchUsersTC, followTC, unfollowTC} from "../../store/action-creator";


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
        dispatch(fetchUsersTC(currentPage, pageSize));
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
        dispatch(unfollowTC(userId))
    }

    const onFollowClick = (userId: number) => {
        dispatch(followTC(userId))

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
            />
        </>
    )

}

export { UsersContainer }
