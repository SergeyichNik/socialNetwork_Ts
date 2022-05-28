import React, {useEffect} from 'react';
import {Header} from "./Header";
import axios from "axios";
import {setTotalUsersCountAC, setUsersAC, toggleIsFetchingAC} from "../../redux/action-creator/ActionCreator";
import {useDispatch} from "react-redux";
import {AuthMeUserDataType, setUserDataAC} from "../../redux/auth-reducer";


const HeaderContainer = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get<AuthMeResType<AuthMeUserDataType>>(
            `https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(res => {

                if (res.data.resultCode === 0) {
                    dispatch(setUserDataAC(res.data.data))
                }
            })
    })

    return <Header/>
};

export { HeaderContainer };


type AuthMeResType<T> = {
    data: T
    fieldsErrors: string[]
    messages: string[]
    resultCode: number
}