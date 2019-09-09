import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import { Button } from "react-bulma-components/full";
import NavBar from './components/NavBar'
import Home from './components/Home'
import Trip from './components/Trip'
import TripList from './containers/TripList';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <React.Fragment>
        <NavBar />
        <Route path = "/home" component = {Home} />
        <Route exact path = "/login" component = {Login} />
        <Route exact path = "/trip" component = {Trip} />
        <Route exact path = "/tripslist" component = {TripList} />
      </React.Fragment>
    </Router>
  );
}

export default App;
