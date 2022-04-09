import {UsersDataType} from "../usersReducer";

export enum ACTIONS_TYPES {
     FOLLOW = "FOLLOW",
     UNFOLLOW = "UNFOLLOW",
     SET_USERS = "SET_USERS",
     SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
     SET_USERS_TOTAL_COUNT = "SET_TOTAL_USERS_COUNT",
     TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING",
}

export type FollowActionType = {
    type: ACTIONS_TYPES.FOLLOW,
    userId: number,
    payload: {
        followed: boolean
    }
}
export type UnfollowActionType = {
    type: ACTIONS_TYPES.UNFOLLOW,
    userId: number,
    payload: {
        followed: boolean
    }
}
export type SetUsersActionType = {
    type: ACTIONS_TYPES.SET_USERS
    payload: {
        users: UsersDataType[],
    }
}
export type SetCurrentPageActionType = {
    type: ACTIONS_TYPES.SET_CURRENT_PAGE
    payload: {
        currentPage: number
    }
}
export type SetTotalUsersCount = {
    type: ACTIONS_TYPES.SET_USERS_TOTAL_COUNT,
    payload: {
        totalUsersCount: number,
    }
}
export type ToggleIsFetching = {
    type: ACTIONS_TYPES.TOGGLE_IS_FETCHING,
    payload: {
        isFetching: boolean
    }
}

export type UsersReducerActionsTypes =
    FollowActionType
    | UnfollowActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetTotalUsersCount
    | ToggleIsFetching

export const mapDispatchToProps = {
    follow: (userId: number): FollowActionType => {
        return {
            type: ACTIONS_TYPES.FOLLOW,
            userId,
            payload: {
                followed: true
            }
        }
    },
    unfollow: (userId: number): UnfollowActionType => {
        return {
            type: ACTIONS_TYPES.UNFOLLOW,
            userId,
            payload: {
                followed: false
            }
        }
    },
    setUsers: (users: UsersDataType[]): SetUsersActionType => {
        return {
            type: ACTIONS_TYPES.SET_USERS,
            payload: {
                users
            }
        }
    },
    setCurrentPage: (currentPage: number): SetCurrentPageActionType => {
        return {
            type: ACTIONS_TYPES.SET_CURRENT_PAGE,
            payload: {
                currentPage
            }
        }
    },
    setTotalUsersCount: (totalUsersCount: number): SetTotalUsersCount => {
        return {
            type: ACTIONS_TYPES.SET_USERS_TOTAL_COUNT,
            payload: {
                totalUsersCount
            }
        }
    },
    toggleIsFetching: (isFetching: boolean): ToggleIsFetching => {
        return {
            type: ACTIONS_TYPES.TOGGLE_IS_FETCHING,
            payload: {
                isFetching
            }
        }
    },
}
