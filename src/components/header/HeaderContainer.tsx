import React, {useEffect} from 'react';
import {Header} from "./Header";
import {useDispatch, useSelector} from "react-redux";
import {meTC, selectFromAuthReducer} from "../../store";



const HeaderContainer = () => {

    const dispatch = useDispatch()
    const { isAuth, login } = useSelector(selectFromAuthReducer)

    useEffect(() => {
        dispatch(meTC())
    }, [])

    return <Header isAuth={isAuth} login={login}/>
};

export { HeaderContainer };
