import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
// import logo from './logo.svg';
import './App.scss'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Trip from './components/Trip'
import TripList from './containers/TripList';
import TripDetail from './components/TripDetail';
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
    // debugger
    this.setState({user: user});
    window.localStorage.setItem("username", this.state.user.username)
  }

componentDidMount() {
  if (!window.localStorage.username === null) {
    console.log(`We already have a user and their name is ${window.localStorage.username}`)
    fetch(`http://localhost:4000/users/${window.localStorage.username}`).then(res => res.json())
      .then(user => {
        this.updateUser(user)
      })
    }else{
      this.setState({loading: false})
      console.log("okay, no pre-existing user")
    }
  }

  checkUser = () => {
    if (!window.localStorage.username === null) {
      console.log(`We already have a user and their name is ${window.localStorage.username}`)
      fetch(`http://localhost:4000/users/${window.localStorage.username}`).then(res => res.json())
        .then(user => {
          this.updateUser(user)
        })
      }else{
        
        console.log("okay, no pre-existing user")
      }
    }


  render() {
    this.checkUser()
    // !window.localStorage.username === null ?  fetch(`http://localhost:4000/users/${window.localStorage.username}`).then(res => res.json())
    //    .then(user => {this.updateUser(user)}) : null 
    return (
      
      
      <Router>
        <React.Fragment>
          <NavBar logged_in={!!this.state.user} updateUser={this.updateUser} />

          <Route exact path = "/" render={() => <Redirect to ="/login" />}   />

          <Route path = "/home" component = {Home} />

          <Route exact path = "/login" render = {() => 
              {return this.state.user ? <UserProfile {...this.state.user}/> : <Login updateUser={this.updateUser} /> }
              }  />

          <Route exact path="/profile" render={() => this.state.user ?
            <UserProfile {...this.state.user}/> :
            <Redirect to="/login" />
          }/>

          <Route exact path = "/logout" render = {() => {
            window.localStorage.removeItem("username");
            this.setState({user: null})
            return <Redirect to ="/login" />
          }} />

{/* Not sure how the top and bottom parts of this nav should react to each other yet; some redundancy */}

          <Route exact path = "/trip" component = {Trip} />
          <Route path={`/trips/:id`} component={TripDetail}/>
          <Route exact path = "/triplist" render = {routerProps => <TripList {...routerProps}/> } />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;