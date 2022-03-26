import {ActionType, ProfilePageType} from "./store";

export type AddPostActionType = {
    type: "ADD_POST"
}
export type UpdatePostActionType = {
    type: "UPDATE_NEW_POST_TEXT"
    text: string
}

export const addPostAC = (): AddPostActionType => {
    return {
        type: "ADD_POST"
    }
}
export const updatePostAC = (text: string): UpdatePostActionType => {
    return {
        type: "UPDATE_NEW_POST_TEXT",
        text
    }
}

const profileReducer = (state: ProfilePageType, action: ActionType) => {
    switch (action.type) {
        case "ADD_POST":
            let newPost = {
                id: Math.random(),
                message: state.newPostMessage,
                likesCount: 0
            }
            state.postData.push(newPost);
            state.newPostMessage = '';
            return state
        case "UPDATE_NEW_POST_TEXT":
            state.newPostMessage = action.text
            return state
        default:
            return state
    }
}

export default profileReducer;