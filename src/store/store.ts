import {dialogsReducer, DialogsReducerActionsType} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import thunk, {ThunkAction} from "redux-thunk";
import {UsersReducerActionsTypes} from "./action-creator/users";
import {authReducer, AuthReducerActionsType} from "./auth-reducer";
import {profileReducer, ProfileReducerActionsTypes} from "./profile-reducer";
import {applyMiddleware, combineReducers, createStore } from "redux";
import {appReducer, AppReducerActionsTypes} from "./app-reducer";




const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
})

const store = createStore(reducers, applyMiddleware(thunk));

// @ts-ignore
window.store = store

export default store;

//types
export type  ThunkActionType = ThunkAction<void, RootStateType, unknown, RootActionsType>

export type RootActionsType =
    | AppReducerActionsTypes
    | ProfileReducerActionsTypes
    | DialogsReducerActionsType
    | UsersReducerActionsTypes
    | AuthReducerActionsType

export type RootStateType = ReturnType<typeof reducers>
