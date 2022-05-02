import React from 'react'
import FormInputComponent from '../form-input/FormInputComponent'
import CustomButtonComponent from '../custom-button/CustomButtonComponent'
import './signUpStyle.scss'

import { auth, createUserProfileDocument } from '../../firebase/firebaseUtils'
import { createUserWithEmailAndPassword } from "firebase/auth";

class SignUpComponent extends React.Component {
    constructor() {
        super()

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state

        if (password !== confirmPassword) {
            alert("passwords don't match")
            return
        }

        try {
            const {user} = await createUserWithEmailAndPassword(auth, email, password) 
            // create a new user with this email and password 

            await createUserProfileDocument(user, {displayName}); // this is to create the user
            // into our database

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }) // this will clear our form

        }catch(error) {
            console.log(error)
        }
    }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state

        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInputComponent type='text' name='displayName' value={displayName} onChange = {this.handleChange} label='Display Name' required />
                    <FormInputComponent type='email' name='email' value={email} onChange = {this.handleChange} label='Email' required />
                    <FormInputComponent type='password' name='password' value={password} onChange = {this.handleChange} label='Password' required />
                    <FormInputComponent type='password' name='confirmPassword' value={confirmPassword} onChange = {this.handleChange} label='Confirm Password' required />
                    <CustomButtonComponent type='submit'>SIGN UP</CustomButtonComponent>
                </form>
            </div>
          )
    }
}

export default SignUpComponent