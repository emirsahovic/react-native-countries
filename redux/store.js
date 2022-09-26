import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { countryReducer } from "./countryReducer";

const reducer = combineReducers({
  country: countryReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(...middleware)));

export default store;
