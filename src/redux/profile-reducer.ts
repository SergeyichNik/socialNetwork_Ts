import {RootStateType, ThunkActionType} from "./redux-store";
import {apiProfile} from "../api";


const initialState: ProfilePageType = {
    postData: [
        {id: 0, message: 'my first post', likesCount: 12},
        {id: 1, message: 'my second post', likesCount: 5},
        {id: 2, message: 'my third post', likesCount: 11},
    ],
    newPostMessage: '',
    profile: undefined,
    status: null
}

export const profileReducer = (state = initialState, action: ProfileReducerActionsTypes): ProfilePageType => {
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
            return {...state,
                newPostMessage: action.text};
        case "SET_USER_PROFILE":
        case "SET_STATUS":
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export const selectFromProfileReducer = (state: RootStateType) => state.profilePage.profile

//actionsCreators
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

export const setUserStatusAC = (status: string) => {
    return {
        type: "SET_STATUS",
        payload: {
            status
        }
    } as const
}

//thunkCreators
export const setUserProfileTC = (id: number | null): ThunkActionType => (
    dispatch
) => {
    apiProfile.getUserProfile(id)
        .then(res => {
            dispatch(setUserProfileAC(res.data))
        })
}

export const fetchUserStatusTC = (id: number | null): ThunkActionType =>
    (
        dispatch
    ) => {
        apiProfile.getUserStatus(id)
            .then(res => {
                console.log(res)
            })
    }

//types
export type ProfileReducerActionsTypes =
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof updatePostAC>
    | ReturnType<typeof setUserStatusAC>


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

type PostType = {
    id: number,
    message: string,
    likesCount: number
}

export type ProfilePageType = {
    newPostMessage: string,
    postData: PostType[],
    profile?: UserProfileType,
    status: string | null,
}


