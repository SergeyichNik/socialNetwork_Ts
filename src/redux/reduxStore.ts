import {combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";



const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

const store = createStore(reducers);


export default store;
