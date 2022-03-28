import {v1} from "uuid";

export const FOLLOW = "FOLLOW"
export const UNFOLLOW = "UNFOLLOW"

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
export type UsersReducerActionsTypes = FollowActionType | UnfollowActionType

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


const initialState: UsersDataType[] = [
    {id: v1(), userName: 'Rastislav', status: 'my status is status',
        userImg:' https://cdn-icons-png.flaticon.com/512/147/147144.png',
        isFollowed: false, location: {country: 'Russia', city: 'Moscow'} },
    {id: v1(), userName: 'Bratislav', status: 'my status is status',
        userImg:' https://cdn-icons-png.flaticon.com/512/147/147144.png',
        isFollowed: true, location: {country: 'Belarus', city: 'Minsk'} },
    {id: v1(), userName: 'Vladislav', status: 'my status is status',
        userImg:' https://cdn-icons-png.flaticon.com/512/147/147144.png',
        isFollowed: false, location: {country: 'Uzbekistan', city: 'Samarkand'} }
]

export const usersReducer = (state = initialState, action: UsersReducerActionsTypes) => {
    switch (action.type) {
        case "FOLLOW":
            return state = state.map((item) => item.id === action.userId ? {...item, isFollowed: true} : item)
        case "UNFOLLOW":
            return state = state.map((item) => item.id === action.userId ? {...item, isFollowed: false} : item)
        default:
            return state
    }
}