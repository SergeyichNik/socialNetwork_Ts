import React, {useEffect} from "react";
import Profile from "./Profile";
import {useDispatch} from "react-redux";
import {setUserProfileTC} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";

const ProfileContainer= () => {

    const dispatch = useDispatch()
    const {userID} = useParams()

    useEffect(() => {
        dispatch(setUserProfileTC(userID))
    }, [])

    return <Profile/>
}

export { ProfileContainer };