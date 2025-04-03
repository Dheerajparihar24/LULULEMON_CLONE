import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import authReducer from "./reducers/authReducer";
import logger from "redux-logger";
import { productReducer } from "./reducers/productReducer";

const rootReducer = combineReducers({
  user: authReducer,
  product: productReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(logger));
export default store;
