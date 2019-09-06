import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Button } from "react-bulma-components/full";

function App() {
  return (
    <div>
    <Button /> {/* this is an example/ proof of concept for importing elements from bulma*/}
    <div className="App">
      <div>a nav bar</div>
      <div>login box</div>
      <div>default trip</div>
    </div>
    </div>
  );
}

export default App;
