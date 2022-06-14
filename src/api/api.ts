
import {UsersDataType} from "../store/users-reducer";
import {UserProfileType} from "../store/profile-reducer";
import {instance} from "./config";


export const  apiUsers = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<GetUsersResponseType>(
            `users?page=${currentPage}&count=${pageSize}`,
            { withCredentials: true })
            .then(res => res.data)
    },
    unfollowRequest(id: number) {
        return instance.delete<ResponseType>(`follow/${id}`)
    },
    followRequest(id: number) {
        return instance.post<ResponseType>(`follow/${id}`)
    }
}

export const apiProfile = {
    getUserProfile(id: number | null) {
        return instance.get<UserProfileType>(`profile/${id}`)
    },
    getUserStatus(id: number | null) {
        return instance.get<GetUserStatusResType>(`profile/status/${id}`)
    },
    updateStatus(status: string) {
        return instance.put<ResponseType>(`profile/status/`, {status: status})
            .then(res => res.data)
    }
}

export const apiAuth = {
    me() {
        return instance.get<ResponseType<MeResponseType>>(
            `auth/me`)
            .then(res => res.data)
    }
}


//types
type GetUsersResponseType = {
    error: null | string,
    items: UsersDataType[]
    totalCount: number
}

type GetUserStatusResType = string


type ResponseType<T = {}> = {
    data: T
    fieldsErrors: string[]
    messages: string[]
    resultCode: number
}

export type MeResponseType = {
    email: string
    id: number
    login: string
}

