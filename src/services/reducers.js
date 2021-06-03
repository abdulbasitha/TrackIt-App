import { combineReducers } from "redux";
import  coreReducer  from "./core/reducer";
import toastReducer from './toast/reducer'
export default combineReducers({
    core: coreReducer,
    toast:toastReducer
})