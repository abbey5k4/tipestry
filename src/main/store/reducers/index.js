import { combineReducers } from "redux";
import Card from "./cardReducer";


const appReducer = combineReducers({
    Card,
})

export default appReducer;