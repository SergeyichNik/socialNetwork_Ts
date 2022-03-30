import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    unfollowAC,
    UsersDataType,
    UsersReducerActionsTypes
} from "../../redux/usersReducer";
import {StateType} from "../../redux/store";
import UsersClassComponent from "./UsersClassComponent";

export type UsersReducerDT = (action: UsersReducerActionsTypes) => void

const mapStateToProps = (state: StateType) => {
    console.log(state.usersPage.users)
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (page: number) => {
            dispatch(setCurrentPageAC(page))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClassComponent)