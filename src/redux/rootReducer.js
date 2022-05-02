// rootReducer represents all the states of our application
// it combines all the other states together in one file
import { combineReducers } from "redux";
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// we will get our local storage object on our window browser from importing this

import userReducer from "./user/userReducer";
import cartReducer from "./cart/cartReducer";
import directoryReducer from "./directory/directoryReducer";
import shopReducer from "./shop/shopReducer";

const persistConfig = {
    key:'root', // this is to tell ar what point inside our reducer we want to start storing everything
    // so 'root' means we want to start to store from the root
    storage,
    whitelist: ['cart'] // the only thing we want redux to persist is our cart states
}

const rootReducer = combineReducers ({
    user: userReducer, // this is a big json object that is only about user
    cart: cartReducer,
    directory: directoryReducer,
    shop:shopReducer
})

export default persistReducer(persistConfig, rootReducer)
// this is a modified version of our root reducer, except now with persistance capabilities