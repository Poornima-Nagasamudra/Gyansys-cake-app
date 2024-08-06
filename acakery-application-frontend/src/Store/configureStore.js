import React from "react";
import { applyMiddleware, combineReducers, createStore } from "redux";
import productReducer from "../Reducers/productReducer";
import orderReducer from "../Reducers/orderReducer";
import {thunk} from 'redux-thunk'
import cartReducer from "../Reducers/cartReducer";
import userReducer from "../Reducers/userReducer";

const configureStore = () => {
    const store = createStore(combineReducers({
        user: userReducer,
        product: productReducer,
        order: orderReducer,
        cart: cartReducer
    }), applyMiddleware(thunk))

     return store
}

export default configureStore