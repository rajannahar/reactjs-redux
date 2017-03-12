import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

import math from "./reducers/mathReducer";
import user from "./reducers/userReducer";

//create our Store, pass in reducers -> combine our reducers into one
export default createStore(
    combineReducers({
        math,
        user
    }),
    {},
    applyMiddleware(logger())
);