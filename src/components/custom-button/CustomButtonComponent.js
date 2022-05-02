import React from 'react'
import { CustomButtonContainer } from './CustomButtonStyle'

const CustomButtonComponent = ({children, ...props}) => {
  return (
    <CustomButtonContainer {...props}>
        {children}
    </CustomButtonContainer>
  )
}

export default CustomButtonComponent