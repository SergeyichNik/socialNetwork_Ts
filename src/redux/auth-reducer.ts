import { RootStateType } from "./redux-store";


const initialState: AuthMeUserDataType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}



const authReducer = (
    state: AuthMeUserDataType = initialState,
    action: AuthReducerActionsType
): AuthMeUserDataType  => {
    switch(action.type) {
        case "SET_USER_DATA":

            return {
                ...state,
                ...action.payload.data,
                isAuth: action.payload.isAuth
            }
        default:
            return state
    }
}

//action creators

export const setUserDataAC = (data: AuthMeUserDataType) => {

    return {
        type: "SET_USER_DATA",
        payload: {
            data,
            isAuth: true
        }
    } as const
}

//types
export type AuthMeUserDataType = {
    id: null | number,
    email: null | string,
    login: null | string,
    isAuth: boolean
}

export type AuthReducerActionsType =
    | ReturnType<typeof setUserDataAC>

export const selectFromAuthReducer = (state: RootStateType) => state.auth
export default authReducer;