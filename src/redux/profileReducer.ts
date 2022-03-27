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

const initialState: ProfilePageType = {
    postData: [
        {id: 0, message: 'my first post', likesCount: 12},
        {id: 1, message: 'my second post', likesCount: 5},
        {id: 2, message: 'my third post', likesCount: 11},
    ],
    newPostMessage: ''
}

const profileReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "ADD_POST":
            const newPost = {
                id: Math.random(),
                message: state.newPostMessage,
                likesCount: 0
            }
            state = {...state, postData: [...state.postData, newPost]};
            state.newPostMessage = '';
            return state
        case "UPDATE_NEW_POST_TEXT":
            return state = {...state, newPostMessage: action.text}
        default:
            return state
    }
}

export default profileReducer;