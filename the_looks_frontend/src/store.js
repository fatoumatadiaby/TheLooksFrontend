import { createStore, applyMiddleware, compose } from "redux";
import productReducer from "./reducers/productReducer";
import userReducer from "./reducers/userReducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  productReducer,
  userReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store