import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import HomepageComponent from './pages/homepage/HomepageComponent';
import ShopComponent from './pages/shoppage/ShopComponent';
import HeaderComponent from './components/header/HeaderComponent';
import SignInandSignUp from './pages/sign-in-and-sign-up/SignInandSignUp';
import CheckoutComponent from './pages/checkout/CheckoutComponent';
import { auth, createUserProfileDocument } from './firebase/firebaseUtils';
import { onAuthStateChanged } from 'firebase/auth';
import { onSnapshot } from "firebase/firestore";
import CurrentUserContext from './context/current-user/currentUserContext';
import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {

    this.unsubscribeFromAuth = onAuthStateChanged(auth, async(userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        onSnapshot(userRef, (doc) => { //onSnapshot method is for us to listen to the update of
          // the user
          this.setState({currentUser: {
              id: doc.id, // change the user state to include the id we get from the firebase
              ...doc.data() // change the user state to include any other user information we get from the doc.data()
          }})
        })
      }
      this.setState({currentUser: userAuth}) // if the userAuth does not exist (false), then set
      // our user state to null

    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth(); // close the subscription to the Firebase user management
  }

  render() {
    return (
      <div>
        <CurrentUserContext.Provider value={this.state.currentUser}>
          <HeaderComponent />
        </CurrentUserContext.Provider>
        <Routes>
          <Route exact path='/' element = {<HomepageComponent />} />
          <Route path='/shop/*' element = {<ShopComponent />} />
          {/* By appending a /* to the end of our /shop path, we're essentially telling 
          React Router that Shop has a nested Routes component and our parent path should match 
          for /shop as well as any other location that matches the /shop/* pattern */}
          <Route exact path='/checkout' element = {<CheckoutComponent />} />
          <Route path='/signin' element= {this.state.currentUser ? (<Navigate replace to='/' />) : (<SignInandSignUp />)} />
          {/* if there is a signed in user, then redirect them to Homepage,
          otherwise go to sign in and sign up page */}
        </Routes>
      </div>
    );
  }
}


export default App;
// we pass in mapStateToProps, mapDispatchToProps so we can have access to this.state.currentUser
// and this.props.setCurrentUser
