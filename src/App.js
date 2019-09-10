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
      user: null,
      trips: []
    }
  }


  updateUser = (user) => {
    // debugger
    this.setState({user: user});
    window.localStorage.setItem("username", this.state.user.username)
  }

componentDidMount() {
  // Fetching Users
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
    // Fetching Trips
    fetch('http://localhost:4000/trips')
        .then(resp => resp.json())
        .then(trip => {
            this.setState({
                trips: trip
            })
        })
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
    
    return (
      
      
      <Router>
        <React.Fragment>
          {/* Navbar */}
          <NavBar logged_in={!!this.state.user} updateUser={this.updateUser} />

          <Route exact path = "/" render={() => <Redirect to ="/login" />}   />

          <Route path = "/home" component = {Home} />

          <Route exact path = "/login" render = {() => 
              {return this.state.user ? <UserProfile {...this.state.user}/> : <Login updateUser={this.updateUser} /> }
              }  />

          <Route exact path="/profile" render={() => this.state.user ? 
            (props => <UserProfile {...props} {...this.state.user} trips = {this.state.trips}/>) :
            <Redirect to="/login" />
          }/>

          <Route exact path = "/logout" render = {() => {
            window.localStorage.removeItem("username");
            this.setState({user: null})
            return <Redirect to ="/login" />
          }} />

{/* Not sure how the top and bottom parts of this nav should react to each other yet; some redundancy */}
{/* <Link key = {this.props.trip.id} to = {`/triplist/${this.props.trip.id}`}>See Trip</Link> */}

          <Route exact path = "/trip" component = {Trip} />
          <Route path={`/trips/:id`} component={TripDetail}/>
          <Route exact path = "/triplist" render = {routerProps => <TripList {...routerProps}/> } />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;