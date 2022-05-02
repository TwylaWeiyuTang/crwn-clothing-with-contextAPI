import { createSelector } from "reselect";
import memoize from 'lodash.memoize'

const selectShop = state => state.shop

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
    // .keys() gives us all of the keys of an object in an array format
    // this is try to get all the values of that key in our object
)

export const selectCollection = memoize((collectionUrlParam) => 
    // collectionUrlParam is a dynamic argument, which means it can change
    // so to memoize selectCollection, we actually have to memoize the whole function using a 
    // memoize helper function
    createSelector(
        [selectCollections],
        collections => collections[collectionUrlParam]
    ))