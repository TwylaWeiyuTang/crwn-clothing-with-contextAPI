import React from 'react'
import { CartItemContainer, CartItemImage, ItemDetailsContainer } from './CartItemStyle'

const CartItemComponent = ({ item: {imageUrl, price, name, quantity }}) => {
  return (
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt='item' />
        <ItemDetailsContainer className='item-details'>
            <span>{name}</span>
            <span>{quantity} x ${price}</span>
        </ItemDetailsContainer>
    </CartItemContainer>
  )
}

export default CartItemComponent