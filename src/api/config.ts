import axios from "axios";

export const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "cccf73ce-544a-4004-bdcd-2ce53fdba4b8"
    }
})


