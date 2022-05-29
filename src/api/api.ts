import axios from "axios";
import {UsersDataType} from "../redux/usersReducer";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "17f3fe98-a96f-4c1a-a7eb-bebd7f1cb8ea"
    }
})

export const  apiUsers = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<GetUsersResponseType>(
            `users?page=${currentPage}&count=${pageSize}`,
            { withCredentials: true })
            .then(res => res.data)
    }
}

//types

type GetUsersResponseType = {
    error: null | string,
    items: UsersDataType[]
    totalCount: number
}