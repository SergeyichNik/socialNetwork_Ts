import React, {FC, useEffect} from "react";
import Profile from "./Profile";
import axios from "axios";
import {useDispatch} from "react-redux";
import {setUserProfileAC} from "../../redux/profileReducer";

const ProfileContainer: FC = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(res => {
                dispatch(setUserProfileAC(res.data))
            })

    })

    return <Profile/>
}

export { ProfileContainer };