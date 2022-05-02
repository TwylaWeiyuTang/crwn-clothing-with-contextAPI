import { CartActionTypes } from "./cartTypes"
import { addItemToCart, removeItemFromCart } from "./cartUtils"

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        
        case CartActionTypes.ADD_ITEM:
            return {
                 ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
                // action.payload here is the item we want to add into our cart
            }

        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }

        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
                // filter return anything that the value is true inside the filter function
                // so if the id of item in the cart does not match with the id of item from 
                // the payload, then we keep them in the cartItems state
            }

        default:
            return state
    } 
}

export default cartReducer