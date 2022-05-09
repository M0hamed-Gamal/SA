import React, { Component } from 'react';
import Naviga from './components/Navbar/Navbar';
import Routes from './config/routes';
import { withRouter } from "react-router";
import jwt from 'jsonwebtoken';
import Footer from './components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

/* The App class is a React component that has a state object with two properties: isLogin and curUser */
class App extends Component {
  state = {
    isLogin: false,
    curUser: '',
  }

  /**
   * If there is a token in local storage, decode it and set the current user
   */
  componentDidMount() {
    let token = localStorage.getItem('jwt');
    if (token) {
      let userId = jwt.decode(token).foo
      this.setCurrentUser(token, userId)
    }

  }

  /* This is a function that is called when a user logs in. It sets the state of the app to reflect
  that the user is logged in and sets the current user to the userId. It also stores the jwt in
  local storage. */
  setCurrentUser = (jwt, userId) => {
    if (jwt) {
      this.setState({
        isLogin: true,
        curUser: userId
      })
      localStorage.setItem('jwt', jwt);
    }
  }
  /**
   * The function removes the jwt token from local storage and sets the state of the current user to an
   * empty string
   */
  handleLogout() {
    localStorage.removeItem('jwt');
    this.setState({
      isLogin: false,
      curUser: ''
    })

  }



  /* This is the render function for the App component. It renders the Naviga component, the Routes
  component, and the Footer component. */
  render() {

    return (
      <>
        <Naviga isLogin={this.state.isLogin} curUser={this.state.curUser} setCurrentUser={this.setCurrentUser} handleLogout={this.handleLogout.bind(this)} />


        <Routes isLogin={this.state.isLogin} setCurrentUser={this.setCurrentUser} handleLogout={this.handleLogout} curUser={this.state.curUser} />
        <Footer/>

      </>
    );
  }
}

export default withRouter(App);
