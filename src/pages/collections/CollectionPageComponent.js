import React, {useContext} from 'react'
import { useParams } from 'react-router-dom'
import CollectionItemComponent from '../../components/collection-item/CollectionItemComponent'
import CollectionsContext from '../../context/collections/collectionsContext';
import './collectionPageStyle.scss'


const CollectionComponent = () => {
  const collections = useContext(CollectionsContext)
  const { collectionId } = useParams()
  const collection = collections[collectionId]
  const {title, items} = collection

  return (
    <div className='collection-page'>
        <h2 className='title'>{title}</h2>
        <div className='items'>
          {items.map(item => <CollectionItemComponent key={item.id} item={item}/>)}
        </div>
    </div>
  )
}


export default CollectionComponent