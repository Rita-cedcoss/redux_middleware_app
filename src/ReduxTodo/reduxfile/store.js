import { applyMiddleware, createStore } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
let store = createStore(reducer, applyMiddleware(thunk, logger));
export default store;
