import {applyMiddleware, combineReducers, createStore } from "redux";
import dialogsReducer, {DialogsReducerActionsType} from "./dialogs-reducer";
import profileReducer, {ProfileReducerActionsTypes} from "./profile-reducer";
import {usersReducer} from "./users-reducer";
import authReducer, {AuthReducerActionsType} from "./auth-reducer";
import thunk, {ThunkAction} from "redux-thunk";
import {UsersReducerActionsTypes} from "./action-creator/action-creators-users-reducer";



const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

const store = createStore(reducers, applyMiddleware(thunk));

// @ts-ignore
window.store = store

export default store;

//types
export type  ThunkActionType = ThunkAction<void, RootStateType, unknown, RootActionsType>

export type RootActionsType =
    | ProfileReducerActionsTypes
    | DialogsReducerActionsType
    | UsersReducerActionsTypes
    | AuthReducerActionsType

export type RootStateType = ReturnType<typeof reducers>
