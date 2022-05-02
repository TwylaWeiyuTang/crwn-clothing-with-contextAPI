import React, {useContext} from 'react'
import { CartContext } from '../../providers/cart/cartProvider'

import { CartIconContainer, ShoppingIconContainer, ItemCountContainer } from './CartIconStyle'

const CartIconComponent = () => {
  const {toggleHidden, cartItemsCount} = useContext(CartContext)
  return (
    <CartIconContainer onClick={toggleHidden}>
        <ShoppingIconContainer />
        <ItemCountContainer>{cartItemsCount}</ItemCountContainer>
    </CartIconContainer>
  )
}


export default CartIconComponent
// make toggleCartHidden available as a props in the above component