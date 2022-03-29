import {connect} from "react-redux";
import {Users} from "./Users";
import {followAC, setUsersAC, unfollowAC, UsersDataType, UsersReducerActionsTypes} from "../../redux/usersReducer";
import {StateType} from "../../redux/store";
import UsersClassComponent from "./UsersClassComponent";

export type UsersReducerDT = (action: UsersReducerActionsTypes) => void

const mapStateToProps = (state: StateType) => {
    return {
        usersPage: state.usersPage
    }
}

const mapDispatchToProps = (dispatch: UsersReducerDT) => {
    return {
        onUnfollowClick: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        onFollowClick: (userId: number) => {
            dispatch(followAC(userId))
        },
        setUsers: (users: UsersDataType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClassComponent)