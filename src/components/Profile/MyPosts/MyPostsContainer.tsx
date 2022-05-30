import React, {Dispatch} from "react";
import {addPostAC, ProfileReducerActionsTypes, updatePostAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/redux-store";

const mapStateToProps = (state: RootStateType) => {

    return {
        profilePage: state.profilePage
    }
}
const mapDispatchToProps = (dispatch: Dispatch<ProfileReducerActionsTypes>) => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updatePostAC(text))
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
