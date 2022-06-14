import {RootStateType} from "./store";

const initialState: AppReducerStateType = {
    appStatus: "IDLE"
}

export const appReducer = (state: AppReducerStateType = initialState, action: AppReducerActionsTypes ) => {
    switch (action.type) {
        case "SET_STATUS":
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}

//selector

export const selectAppReducerStatus = (state: RootStateType) => state.app.appStatus

//actionsCreators

export const setAppStatusAC = (appStatus: StatusType) => {
    return {
        type: "SET_STATUS",
        payload: {
            appStatus
        }
    } as const
}

//types

type StatusType = 'LOADING' | 'FAILED' | 'SUCCESS' | 'IDLE'

export type AppReducerStateType = {
    appStatus: StatusType
}

export type AppReducerActionsTypes =
    | ReturnType<typeof setAppStatusAC>

