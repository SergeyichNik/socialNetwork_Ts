import {RootStateType, ThunkActionType} from "./redux-store";
import {apiAuth} from "../api";
import {MeResponseType} from "../api/api";


const initialState: MeDomainDataType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}



export const authReducer = (
    state: MeDomainDataType = initialState,
    action: AuthReducerActionsType
): MeDomainDataType  => {
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

export const selectFromAuthReducer = (state: RootStateType) => state.auth

//action creators
export const setUserDataAC = (data: MeResponseType) => {
    return {
        type: "SET_USER_DATA",
        payload: {
            data,
            isAuth: true
        }
    } as const
}
// thunkCreator
export const meTC = (): ThunkActionType => (
    dispatch
) => {
    apiAuth.me()
        .then(res => {
            if (res.resultCode === 0) {
                dispatch(setUserDataAC(res.data))
            }
        })
}

//types
export type MeDomainDataType = {
    id: null | number,
    email: null | string,
    login: null | string,
    isAuth: boolean
}

export type AuthReducerActionsType =
    | ReturnType<typeof setUserDataAC>
