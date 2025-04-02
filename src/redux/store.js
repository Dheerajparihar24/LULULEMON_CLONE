import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import authReducer from "./reducers/authReducer";
import logger from "redux-logger";

const rootReducer = combineReducers({
  user: authReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(logger));
export default store;
