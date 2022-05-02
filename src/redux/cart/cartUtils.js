// utility functions allow us to keep our file clean and organise functions we may need in multiple files
// in one location

export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)
    // it the id of the cartItem we want to add matches with the id of item already in the cart
    // we will include it in this array
    // if it doesn't find any matching value, the value of this variable will be undefined

    if (existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id? 
            {...cartItem, quantity: cartItem.quantity + 1} // if the id matches with the existing
            // cart item, then increase the quantity of that item by 1
            : cartItem // otherwise return the original cartItem
            )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
    // if the cart item we want to add doesn not match with any cart item id that exists in our
    // cart, we will just add them as a new state in our array and set the base quantity for them
    // to 1
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    } // if the quantity for the item we want to remove is 1, then remove this item from our cart

    return cartItems.map(
        cartItem =>
        cartItem.id === cartItemToRemove.id ?
        {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem
    )
}
