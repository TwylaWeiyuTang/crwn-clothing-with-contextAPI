import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import  { persistStore } from 'redux-persist'
// this allows our browser to cache our store

import rootReducer from "./rootReducer";

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

const store = createStore(rootReducer, applyMiddleware(...middlewares))
// applyMiddleware(...middlewares) will spread in all of the values in the middlewares array into
// this function call as individual arguments. In this way, if we ever need to add more things to
// the middleware, we can just add it to this array
export const persistor = persistStore(store) //creating a persisted version of the store

export default store