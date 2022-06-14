import React, {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";
import {setUserProfileTC} from "../../store/profile-reducer";
import {useMatch, useParams} from "react-router-dom";
import Profile from "./Profile";
import {PROFILE} from "../../constants";
import {selectAppReducerStatus, selectFromAuthReducer} from "../../store";
import {Preloader} from "../preloader";

const ProfileContainer= () => {

    const AuthorisedUserID = useSelector(selectFromAuthReducer).id
    const appStatus = useSelector(selectAppReducerStatus)
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

    if (appStatus === "LOADING") {
        return <Preloader/>
    }

    return <Profile/>
}

export { ProfileContainer };