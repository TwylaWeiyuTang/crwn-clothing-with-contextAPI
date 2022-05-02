import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { CollectionsOverviewContainer } from './CollectionOverviewStyle'
import CollectionPreviewComponent from '../collection-preview/CollectionPreviewComponent'
import { selectCollectionsForPreview } from '../../redux/shop/shopSelectors'

const CollectionsOverview = ({collections}) => {
  return (
    <CollectionsOverviewContainer>
        {collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreviewComponent key={id} {...otherCollectionProps} />
        ))}
    </CollectionsOverviewContainer>
  )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect (mapStateToProps) (CollectionsOverview)