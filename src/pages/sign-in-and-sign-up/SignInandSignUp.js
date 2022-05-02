import React from 'react'
import './signInandSignUpStyle.scss'

import SignIn from '../../components/sign-in/SignInComponent'
import SignUpComponent from '../../components/sign-up/SignUpComponent'

const SignInandSignUp = () => {
  return (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUpComponent />
    </div>
  )
}

export default SignInandSignUp