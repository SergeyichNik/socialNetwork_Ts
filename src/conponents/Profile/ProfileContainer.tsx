import React, {useEffect} from "react";
import Profile from "./Profile";
import axios from "axios";
import {useDispatch} from "react-redux";
import {setUserProfileAC} from "../../redux/profileReducer";
import {useParams} from "react-router-dom";

const ProfileContainer= () => {

    const dispatch = useDispatch()
    const {userID} = useParams()

    useEffect(() => {
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
            .then(res => {
                dispatch(setUserProfileAC(res.data))
            })

    }, [])

    return <Profile/>
}

export { ProfileContainer };