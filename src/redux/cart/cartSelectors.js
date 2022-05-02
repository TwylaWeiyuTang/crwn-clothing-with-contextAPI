import { createSelector } from "reselect";

// using selectors makes sure our component won't rerender 
// whenever the state changes that is unrelated to the that component

// input selector
const selectCart = state => state.cart

//output selector uses an input selector with createSelector to build themselves
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)
// this is a memorior selector

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems], // get our cart items from the above output selector
    cartItems =>
     cartItems.reduce(
         (accumulatedQuantity, cartItem) => 
            accumulatedQuantity + cartItem.quantity, 0) 
// The reduce() method add up the already accumulated value and the next value that is
  // going to be accumulated
  // 0  means it starts from adding 0 with the first element in the array

) // this gives us the total quantity of our cart items

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce(
            (accumulatedPrice, cartItem) => 
                accumulatedPrice+ cartItem.quantity * cartItem.price, 0
        )
)