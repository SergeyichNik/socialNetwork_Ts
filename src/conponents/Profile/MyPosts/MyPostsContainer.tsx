import React, {FC} from "react";
import {ActionType, StateType} from "../../../redux/store";
import {addPostAC, updatePostAC} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";

type PropsType = {
    store: {
        getState: () => StateType,
        dispatch: (action: ActionType) => void
    }
}

export const MyPostsContainer: FC<PropsType> = ({store}) => {
    const state = store.getState()

    const updateNewPostText = (text: string) => {
        store.dispatch(updatePostAC(text))
    }

    const addPost = () => {
        store.dispatch(addPostAC())
    }

    return <MyPosts updateNewPostText={updateNewPostText}
                    addPost={addPost}
                    newPostMessage={state.profilePage.newPostMessage}
                    postData={state.profilePage.postData}/>
}

