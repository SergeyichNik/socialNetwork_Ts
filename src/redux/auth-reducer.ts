


const initialState: UserDataType = {
    userID: null,
    email: null,
    login: null
}

const authReducer = (
    state: UserDataType = initialState,
    action: AuthReducerActionsType
):UserDataType  => {
    switch(action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                ...action.payload.data
            }
        default:
            return state
    }
}

//action creators

export const setUserDataAC = (data: UserDataType) => {
    return {
        type: "SET_USER_DATA",
        payload: {
            data
        }
    } as const
}

//types
type UserDataType = {
    userID: null | number,
    email: null | string,
    login: null | string
}

export type AuthReducerActionsType =
    | ReturnType<typeof setUserDataAC>

export default authReducer;