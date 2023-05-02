import { applyMiddleware, combineReducers, createStore } from "redux";
import { authReducer } from "./reducers/authReducer";
import thunk from "redux-thunk";
import { jokeReducer } from "./reducers/jokeReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    joke: jokeReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));