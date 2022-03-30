const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"

export type UsersDataType = {
    followed: boolean,
    id: number,
    name: string,
    photos: {
        large?: string,
        small?: string
    }
    status: string,
    location?: {
        country?: string,
        city?: string
    }
    uniqueUrlName?: string
}
export type UsersPageType = {
    users: UsersDataType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
}

export type FollowActionType = {
    type: typeof FOLLOW,
    userId: number
}
export type UnfollowActionType = {
    type: typeof UNFOLLOW,
    userId: number
}
export type SetUsersActionType = {
    type: typeof SET_USERS
    users: UsersDataType[]
}
export type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export type UsersReducerActionsTypes = FollowActionType | UnfollowActionType
    | SetUsersActionType | SetCurrentPageActionType

export const followAC = (userId: number): FollowActionType => {
    return {
        type: FOLLOW,
        userId
    }
}
export const unfollowAC = (userId: number): UnfollowActionType => {
    return {
        type: UNFOLLOW,
        userId
    }
}
export const setUsersAC = (users: UsersDataType[]): SetUsersActionType => {
    return {
        type: SET_USERS,
        users
    }
}
export const setCurrentPageAC = (page: number): SetCurrentPageActionType => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: page
    }
}


const initialState: UsersPageType = {
    users: [],
    pageSize: 4,
    totalUsersCount: 13,
    currentPage: 3
}

export const usersReducer = (state = initialState, action: UsersReducerActionsTypes) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map((item) => item.id === action.userId
                    ? {...item, followed: true} : item)
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map((item) => item.id === action.userId
                    ? {...item, followed: false} : item)
            }
        case SET_USERS:
            return {...state, users: action.users}
        case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.currentPage}
        default:
            return state
    }
}