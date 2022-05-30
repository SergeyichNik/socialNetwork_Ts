import React from "react";
import {DispatchType, StateType} from "../../../redux/store";
import {addPostAC, updatePostAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state: StateType) => {

    return {
        profilePage: state.profilePage
    }
}
const mapDispatchToProps = (dispatch: DispatchType) => {
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
