const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"

export type UsersDataType = {
    id: string,
    userName: string,
    status: string,
    userImg: string,
    isFollowed: boolean,
    location: {
        country: string,
        city: string
    }
}

export type FollowActionType = {
    type: typeof FOLLOW,
    userId: string
}
export type UnfollowActionType = {
    type: typeof UNFOLLOW,
    userId: string
}
export type SetUsersActionType = {
    type: typeof SET_USERS
    users: UsersDataType[]
}
export type UsersReducerActionsTypes = FollowActionType | UnfollowActionType | SetUsersActionType

export const followAC = (userId: string): FollowActionType => {
    return {
        type: FOLLOW,
        userId
    }
}
export const unfollowAC = (userId: string): UnfollowActionType => {
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
                ? {...item, isFollowed: true} : item)
        case UNFOLLOW:
            return state = state.map((item) => item.id === action.userId
                ? {...item, isFollowed: false} : item)
        case SET_USERS:
            return [...state, ...action.users ]
        default:
            return state
    }
}