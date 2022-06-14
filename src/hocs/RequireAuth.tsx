import React from 'react';
import {Navigate, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectFromAuthReducer} from "../store";

export const RequireAuth = ({children} : {children: JSX.Element}) => {

    const {isAuth} = useSelector(selectFromAuthReducer)
    const location = useLocation()


    if (!isAuth) return <Navigate to={"/login"} state={{form: location}} replace={true}/>

    return children
};
