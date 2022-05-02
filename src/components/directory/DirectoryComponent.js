import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import MenuItemComponent from '../menu-item/MenuItemComponent'
import { selectDirectorySections } from './directorySelectors'

import { DirectoryMenuContainer } from './DirectoryStyle'

const Directory = ({sections}) => {
        return (
            <DirectoryMenuContainer>
                {sections.map(({id, ...otherSectionPros})=> (
                    <MenuItemComponent key={id} {...otherSectionPros} />
                ))}

                {/* ...otherSectionProps is the same as declaring , title, imageUrl, size, linkUrl*/}
            </DirectoryMenuContainer>
        )
}
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps) (Directory)