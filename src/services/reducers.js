import { combineReducers } from "redux";
import  coreReducer  from "./core/reducer";

export default combineReducers({
    core: coreReducer
})