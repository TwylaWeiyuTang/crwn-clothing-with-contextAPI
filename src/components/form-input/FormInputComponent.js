import React from 'react'
import { FormInputContainer, GroupContainer, FormInputLabel } from './FormInputStyle'

const FormInputComponent = ({handleChange, label, ...props}) => {
  return (
    <GroupContainer>
        <FormInputContainer onChange={handleChange} {...props} />
        { 
            label ? /* If there is a label props being passed in, then we will generate a lable html */
            (<FormInputLabel className={props.value.length ? 'shrink' : ''}>
                {/* if there is the value being typed by the user in the label field, 
                then we will apply the property of shrink, otherwise it will be an empty string  */}
                {label}
            </FormInputLabel>)
            : null
        }
    </GroupContainer>
  )
}

export default FormInputComponent