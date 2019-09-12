import React from 'react'
import { Route } from 'react-router-dom'
import TripCreationForm from '../components/TripCreationForm'
import TripList from '../containers/TripList'
import TripDetail from '../components/TripDetail'

class UserProfile extends React.Component {
    //don't forget to use the props and destructure -- but you need more interesting props than name. Serialize some trips!
    
    // Problem to watch for: when content first loads, the props are undefined.  
    // They only come in after loading once state is set

    constructor(){
        super()
        this.state = {
        }
    }

    componentDidMount() {
        this.setState({trips: this.props.trips})
    }

    showNewTrip=(trip)=>{
        this.setState({madeNew: 'TRUE'})
        this.setState({trips: [...this.state.trips, trip]})
       

    }
    
    return(
        <div  className="comp user box">
            {/* Currently NOT hiding this from users who have other trips in order to get it working first */}
             {!this.state.madeNew ? <TripCreationForm functionToRender={this.showNewTrip}/>: null}
            
            {this.state.trips ? <TripList trips = {this.state.trips} /> : null}
        </div>
        )
    }
    
} 

export default UserProfile