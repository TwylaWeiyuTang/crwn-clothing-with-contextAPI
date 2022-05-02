import React from 'react'
import CollectionItemComponent from '../collection-item/CollectionItemComponent'

import { CollectionPreviewContainer, TitleContainer, PreviewContainer } from './CollectionPreviewStyle'

const CollectionPreviewComponent = ({title, items}) => {
  return (
    <CollectionPreviewContainer>
      <TitleContainer>{title.toUpperCase()}</TitleContainer>
      <PreviewContainer>
        {items.filter((item, idx) => idx < 4).map((item) => (
          <CollectionItemComponent key={item.id} item={item} />
        ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  )
}

export default CollectionPreviewComponent