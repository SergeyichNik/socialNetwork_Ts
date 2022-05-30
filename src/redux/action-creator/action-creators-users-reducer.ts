import {UsersDataType} from "../users-reducer";
import {apiUsers} from "../../api";
import {ThunkActionType} from "../redux-store";


export type UsersReducerActionsTypes =
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>
    | ReturnType<typeof toggleIsFetchingAC>
    | ReturnType<typeof followingInProgressAC>


export const followAC = (userId: number) => {
    return {
        type: "FOLLOW",
        userId,
        payload: {
            followed: true
        }
    } as const
}
export const unfollowAC = (userId: number) => {
    return {
        type: "UNFOLLOW",
        userId,
        payload: {
            followed: false
        }
    } as const
}
export const setUsersAC = (users: UsersDataType[]) => {
    return {
        type: "SET_USERS",
        payload: {
            users
        }
    } as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: "SET_CURRENT_PAGE",
        payload: {
            currentPage
        }
    } as const
}
export const setTotalUsersCountAC = (totalUsersCount: number) => {
    return {
        type: "SET_USERS_TOTAL_COUNT",
        payload: {
            totalUsersCount
        }
    } as const
}
export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {
        type: "TOGGLE_IS_FETCHING",
        payload: {
            isFetching
        }
    } as const
}

export const followingInProgressAC = (isFetching: boolean, id: number) => {
    return {
        type: "SET_FOLLOWING_IN_PROGRESS",
        payload: {
            id,
            isFetching,
        }
    } as const
}
// ThunkCreator

export const fetchUsersTC = (currentPage: number, pageSize: number): ThunkActionType => (dispatch) => {
    dispatch(toggleIsFetchingAC(true));
    apiUsers.getUsers(currentPage, pageSize)
        .then(res => {
            dispatch(toggleIsFetchingAC(false));
            dispatch(setUsersAC(res.items));
            dispatch(setTotalUsersCountAC(res.totalCount))
        })
}

export const unfollowTC = (id: number): ThunkActionType => (
    dispatch
) => {
    dispatch(followingInProgressAC(true, id))
    apiUsers.unfollowRequest(id)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(unfollowAC(id))
                dispatch(followingInProgressAC(false, id))
            }
        })
}

export const followTC = (id: number): ThunkActionType => (
    dispatch
) => {
    dispatch(followingInProgressAC(true, id))
    apiUsers.followRequest(id)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(followAC(id))
                dispatch(followingInProgressAC(false, id))
            }
        })
}