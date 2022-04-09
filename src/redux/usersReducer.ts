import {ACTIONS_TYPES, UsersReducerActionsTypes} from "./action-creator/ActionCreator";

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
}

const initialState: UsersPageType = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

export const usersReducer = (state = initialState, action: UsersReducerActionsTypes) => {
    switch (action.type) {
        case ACTIONS_TYPES.FOLLOW:
        case ACTIONS_TYPES.UNFOLLOW:
            return {
                ...state, users: state.users.map((item) => item.id === action.userId
                    ? {...item, ...action.payload} : item)
            }
        case ACTIONS_TYPES.SET_USERS:
        case ACTIONS_TYPES.SET_CURRENT_PAGE:
        case ACTIONS_TYPES.SET_USERS_TOTAL_COUNT:
        case ACTIONS_TYPES.TOGGLE_IS_FETCHING:
            return {...state,
                ...action.payload
            }
        default:
            return state
    }
}