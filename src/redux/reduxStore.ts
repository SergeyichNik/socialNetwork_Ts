import {combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";



const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

type RootState = typeof reducers;
export type ReduxStateType = ReturnType<RootState>

const store = createStore(reducers);


export default store;
