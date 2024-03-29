import {UsersReducerActionsTypes} from "./action-creator/users";
import {RootStateType} from "./store";

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
    currentPage: number,
    isFetching: boolean,
    followingInProgress: number[],
}

const initialState: UsersPageType = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

export const usersReducer = (state = initialState, action: UsersReducerActionsTypes) => {
    switch (action.type) {
        case "FOLLOW":
        case "UNFOLLOW":
            return {
                ...state, users: state.users.map((item) => item.id === action.userId
                    ? {...item, ...action.payload} : item)
            }
        case "SET_USERS":
        case "SET_CURRENT_PAGE":
        case "SET_USERS_TOTAL_COUNT":
        case "TOGGLE_IS_FETCHING":
            return {...state,
                ...action.payload
            };
        case "SET_FOLLOWING_IN_PROGRESS":
            return {...state,
            followingInProgress: action.payload.isFetching
                ? [...state.followingInProgress, action.payload.id]
                : state.followingInProgress.filter(id => id !== action.payload.id)
            }
        default:
            return state
    }
}

export const selectFromUsersReducer = (state: RootStateType) => state.usersPage