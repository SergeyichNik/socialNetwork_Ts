import {connect} from "react-redux";
import {Users} from "./Users";
import {followAC, unfollowAC, UsersDataType, UsersReducerActionsTypes} from "../../redux/usersReducer";
import {StateType} from "../../redux/store";

export type UsersReducerDT = (action: UsersReducerActionsTypes) => void

const mapStateToProps = (state: StateType) => {
    return {
        usersPage: state.usersPage
    }
}

const mapDispatchToProps = (dispatch: UsersReducerDT) => {
    return {
        onUnfollowClick: (userId: string) => {
            dispatch(unfollowAC(userId))
        },
        onFollowClick: (userId: string) => {
            dispatch(followAC(userId))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)