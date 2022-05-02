import React, {useContext} from 'react'
import { addItem } from '../../redux/cart/cartActions'
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './CollectionItemStyle'
import { CartContext } from '../../providers/cart/cartProvider'

const CollectionItemComponent = ({item}) => {
  const { name, price, imageUrl} = item // desrtucture all the properties from each item
  const {addItem} = useContext(CartContext)
  return (
    <CollectionItemContainer>
        <BackgroundImage  imageUrl={imageUrl}/>
        <CollectionFooterContainer>
            <NameContainer> {name} </NameContainer>
            <PriceContainer> {price} </PriceContainer>
        </CollectionFooterContainer>
        <AddButton onClick={() => addItem(item)} inverted> 
          Add to cart 
        </AddButton>
    </CollectionItemContainer>
  )
}

export default CollectionItemComponent