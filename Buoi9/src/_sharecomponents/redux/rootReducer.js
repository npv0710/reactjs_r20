import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import countReducer from "./countReducer";

const rootReducer = combineReducers({
    todo: todoReducer,
    count: countReducer
})

export default rootReducer;