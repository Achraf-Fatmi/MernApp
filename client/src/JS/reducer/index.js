import { combineReducers } from "redux";
import { userReducer } from './user'
import { editReducer } from "./edit";


export const rootReducer = combineReducers({userReducer, editReducer})