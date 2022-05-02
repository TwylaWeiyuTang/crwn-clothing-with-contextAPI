import React from 'react';
import FormInputComponent from '../form-input/FormInputComponent';
import CustomButtonComponent from '../custom-button/CustomButtonComponent';
import { signInWithGoogle, auth } from '../../firebase/firebaseUtils';
import { signInWithEmailAndPassword } from "firebase/auth";

import './signInStyle.scss'

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state={
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault() // this will prevent the default submit action from firing

        const { email, password } = this.state

        try {
            await signInWithEmailAndPassword(auth, email, password)
            // if the above code succeed, we will clear our sign in form
            this.setState({email: '', password: ''})
        } catch(error) {
            console.log(error)
        }
    }

    handleChange = event => {
        const {value, name} = event.target // pull of the value and name from the input itself
        this.setState({[name]: value})
    }

    render () {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInputComponent
                    name='email' 
                    type='email' 
                    value={this.state.email} 
                    label='email'
                    handleChange={this.handleChange} 
                    required/>

                    <FormInputComponent
                    name='password'
                    type='password' 
                    label='password'
                    value={this.state.password} 
                    handleChange={this.handleChange} 
                    required/>

                    <div className='buttons'>
                        <CustomButtonComponent type='submit'> Sign in</CustomButtonComponent>
                        <CustomButtonComponent type='button' onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with Google
                        </CustomButtonComponent>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn