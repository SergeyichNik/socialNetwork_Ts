import {postDataType} from "./store";
import {RootStateType} from "./redux-store";

const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"

export type AddPostActionType = {
    type: typeof ADD_POST
}
export type UpdatePostActionType = {
    type: typeof UPDATE_NEW_POST_TEXT
    text: string
}
export type ProfileReducerActionsTypes =
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof updatePostAC>

export type UserProfileType =  {
    aboutMe: string
    contacts?: {
        facebook: string | null
        github: string | null
        instagram: string | null
        mainLink: string | null
        twitter: string | null
        vk: string | null
        website: string | null
        youtube: string | null
    }
    fullName: string
    lookingForAJob: true
    lookingForAJobDescription: string
    photos?: {
        small: string,
        large: string
    }
    userId: number

}

export type ProfilePageType = {
    newPostMessage: string,
    postData: postDataType[],
    profile?: UserProfileType
}



const initialState: ProfilePageType = {
    postData: [
        {id: 0, message: 'my first post', likesCount: 12},
        {id: 1, message: 'my second post', likesCount: 5},
        {id: 2, message: 'my third post', likesCount: 11},
    ],
    newPostMessage: '',
    profile: undefined
}

const profileReducer = (state = initialState, action: ProfileReducerActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: Math.random(),
                message: state.newPostMessage,
                likesCount: 0
            }
            state = {...state, postData: [...state.postData, newPost]};
            state.newPostMessage = '';
            return state
        case UPDATE_NEW_POST_TEXT:
            return {...state,
                newPostMessage: action.text};
        case "SET_USER_PROFILE":
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

//actions

export const setUserProfileAC = (profile: UserProfileType) => {
    return {
        type: "SET_USER_PROFILE",
        payload: {
            profile
        }
    } as const
}

export const addPostAC = () => {
    return {
        type: "ADD_POST"
    } as const
}
export const updatePostAC = (text: string) => {
    return {
        type: "UPDATE_NEW_POST_TEXT",
        text
    } as const
}

export const selectFromProfileReducer = (state: RootStateType) => state.profilePage.profile

export default profileReducer;

//types
