import { combineReducers } from "redux";
import blogFilterReducer from "./blogFilterReducer";
import blogReducer from "./blogReducer";
import compareReducer from "./compareReducer";

const rootReducer = combineReducers({
  blogFilterReducer,
  blogReducer,
  compareReducer,
});

export default rootReducer;
