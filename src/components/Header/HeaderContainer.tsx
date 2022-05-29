import React, {useEffect} from 'react';
import {Header} from "./Header";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {AuthMeUserDataType, selectFromAuthReducer, setUserDataAC} from "../../redux/auth-reducer";


const HeaderContainer = () => {
    const dispatch = useDispatch()
    const { isAuth, login } = useSelector(selectFromAuthReducer)

    useEffect(() => {
        axios.get<AuthMeResType<AuthMeUserDataType>>(
            `https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(res => {
                console.log(res.data.data)
                if (res.data.resultCode === 0) {
                    dispatch(setUserDataAC(res.data.data))
                }
            })
    }, [])

    return <Header isAuth={isAuth} login={login}/>
};

export { HeaderContainer };


type AuthMeResType<T> = {
    data: T
    fieldsErrors: string[]
    messages: string[]
    resultCode: number
}