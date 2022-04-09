import {connect} from "react-redux";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import {StoreType} from "../../redux/reduxStore";
import {UsersDataType} from "../../redux/usersReducer";
import {mapDispatchToProps, UsersReducerActionsTypes
} from "../../redux/action-creator/ActionCreator";
import {Preloader} from "../common/Preloader";

export type UsersReducerDT = (action: UsersReducerActionsTypes) => void

type PropsType = {
    users: UsersDataType[]
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    setUsers: (users: UsersDataType[]) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

class UsersClassComponent extends React.Component<PropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        if (this.props.users.length === 0) {
            axios.get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.toggleIsFetching(false);
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount)
                })
        }
    }

    onCurrentPageChange(page: number) {
        this.props.toggleIsFetching(true)
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            })
        this.props.setCurrentPage(page)
    }

    render() {
        const {users,
            unfollow,
            follow,
            totalUsersCount,
            pageSize,
            currentPage,
            isFetching} = this.props
        return (
            <>
                {isFetching && <Preloader/>}
                <Users users={users}
                       totalUsersCount={totalUsersCount}
                       pageSize={pageSize}
                       currentPage={currentPage}
                       onUnfollowClick={unfollow}
                       onFollowClick={follow}
                       onCurrentPageChange={this.onCurrentPageChange.bind(this)}
                />
            </>
        )
    }
}

const mapStateToProps = (state: StoreType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

// const mapDispatchToProps = (dispatch: UsersReducerDT) => {
//     unfollowAC,
//     followAC,
//     setUsersAC,
//     setCurrentPageAC,
//     setTotalUsersCount,
//     toggleIsFetching
//         }
//     }
// }

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClassComponent)
