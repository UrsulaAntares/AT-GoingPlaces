import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Button } from "react-bulma-components/full";
import NavBar from './components/NavBar'
import Trip from './components/Trip'
import TripList from './containers/TripList';
import Login from './components/Login';

function App() {
  return (
    <div>
    <Button /> {/* this is an example/ proof of concept for importing elements from bulma*/}
    <div className="App">
      <NavBar />
      <Login />
      <Trip />
      <TripList />
    </div>
    </div>
  );
}

export default App;
