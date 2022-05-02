import { createContext, useState, useEffect } from "react";

import { addItemToCart, removeItemFromCart, filterItemFromCart, getCartItemsCount, getCartTotal } from "./cartUtils";

export const CartContext = createContext({
    hidden: true,
    toggleHidden: () => {},
    cartItems: [],
    addItem: () => {},
    removeItem: () => {},
    clearItemFromCart: () => {},
    cartItemsCount: 0,
    total: 0
})

const CartProvider = ({ children}) => {
    const [hidden, setHidden] = useState(true)
    const [cartItems, setCartItems] = useState([])
    const [cartItemsCount, setCartItemsCount] = useState(0)
    const [total, setTotal] = useState(0)

    const addItem = item => setCartItems(addItemToCart(cartItems, item))
    const toggleHidden = () => setHidden(!hidden)
    const removeItem = item => setCartItems(removeItemFromCart(cartItems, item))
    const clearItemFromCart= item => setCartItems(filterItemFromCart(cartItems, item))

    useEffect(() => {
        setCartItemsCount(getCartItemsCount(cartItems))
        setTotal(getCartTotal(cartItems))
    }, [cartItems])

    return (
        <CartContext.Provider
            value={{
                hidden,
                toggleHidden,
                cartItems,
                removeItem,
                addItem,
                cartItemsCount,
                clearItemFromCart,
                total
            }}
        >
            {children}
        </CartContext.Provider>
    )
} // we use this CartProvider to wrap our entire app up, so our entire app will have access to
// the CartContext we defined at the top

export default CartProvider