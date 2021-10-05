import { combineReducers } from "redux";
import blogFilterReducer from "./blogFilterReducer";
import blogReducer from "./blogReducer";

const rootReducer = combineReducers({
  blogFilterReducer,
  blogReducer,
});

export default rootReducer;
