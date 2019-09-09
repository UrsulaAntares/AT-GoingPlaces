import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import { Button } from "react-bulma-components/full";
import NavBar from './components/NavBar'
import Home from './components/Home'
import Trip from './components/Trip'
import TripList from './containers/TripList';
import Login from './components/Login';
import UserProfile from './components/UserProfile';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      user: null
    }
  }


  updateUser = (user) => {
    this.setState({user: user});
    // debugger
    window.localStorage.setItem("username", this.state.user.username)
}




  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar />
          <Route exact path = "/" render={() => <Redirect to ="/profile" />}   />
          <Route path = "/home" component = {Home} />
          <Route exact path = "/login" render = {() => 
              { return this.state.user ? <UserProfile {...this.state.user}/> : <Login updateUser={this.updateUser} /> }
              }  />
          <Route exact path = "/trip" component = {Trip} />
          <Route exact path = "/tripslist" component = {TripList} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
