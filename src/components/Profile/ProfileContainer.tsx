import React, {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";
import {setUserProfileTC} from "../../redux/profile-reducer";
import {useMatch, useParams} from "react-router-dom";
import Profile from "./Profile";
import {PROFILE} from "../../constants";
import {selectFromAuthReducer} from "../../redux";

const ProfileContainer= () => {

    const AuthorisedUserID = useSelector(selectFromAuthReducer).id
    const dispatch = useDispatch()
    const userID = useParams().userID

    const match = useMatch(PROFILE)

    let id: number | null;

    if (match) {
        id = AuthorisedUserID
    }

    if (userID) {
        id = Number(userID)
    }

    useEffect(() => {
        dispatch(setUserProfileTC(id))
    }, [])

    return <Profile/>
}

export { ProfileContainer };