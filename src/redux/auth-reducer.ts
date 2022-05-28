


const initialState: AuthMeUserDataType = {
    id: null,
    email: null,
    login: null
}



const authReducer = (
    state: AuthMeUserDataType = initialState,
    action: AuthReducerActionsType
): AuthMeUserDataType  => {
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

export const setUserDataAC = (data: AuthMeUserDataType) => {
    return {
        type: "SET_USER_DATA",
        payload: {
            data
        }
    } as const
}

//types
export type AuthMeUserDataType = {
    id: null | number,
    email: null | string,
    login: null | string
}

export type AuthReducerActionsType =
    | ReturnType<typeof setUserDataAC>

export default authReducer;