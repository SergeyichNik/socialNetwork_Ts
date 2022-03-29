const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"

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
export type UsersReducerActionsTypes = FollowActionType | UnfollowActionType | SetUsersActionType

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



const initialState: UsersDataType[] = []

export const usersReducer = (state = initialState, action: UsersReducerActionsTypes) => {
    switch (action.type) {
        case FOLLOW:
            return state = state.map((item) => item.id === action.userId
                ? {...item, followed: true} : item)
        case UNFOLLOW:
            return state = state.map((item) => item.id === action.userId
                ? {...item, followed: false} : item)
        case SET_USERS:
            return [...state, ...action.users ]
        default:
            return state
    }
}