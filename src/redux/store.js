import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const createdStore = createStore(rootReducer, applyMiddleware(thunk));

export const initializeStore = (initialState = {}) => {
  return createdStore;
};
