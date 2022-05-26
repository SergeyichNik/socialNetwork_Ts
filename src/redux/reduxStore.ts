import {combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import {usersReducer} from "./usersReducer";



const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})

const store = createStore(reducers);

// @ts-ignore
window.store = store

export type StoreType = ReturnType<typeof reducers>
export default store;
