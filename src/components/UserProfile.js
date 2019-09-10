import React from 'react'
import { Route } from 'react-router-dom'
import TripCreationForm from '../components/TripCreationForm'
import TripList from '../containers/TripList'
import TripDetail from '../components/TripDetail'

const UserProfile = (props) => {
    //don't forget to use the props and destructure -- but you need more interesting props than name. Serialize some trips!
    
    // Problem to watch for: when content first loads, the props are undefined.  
    // They only come in after loading once state is set
    
    return(
        <div  className="comp user box">
            <h1>{props.username}'s Plans</h1>
            
            {/* Currently NOT hiding this from users who have other trips in order to get it working first */}
             <TripCreationForm />
            
            {props.trips ? <TripList trips = {props.trips} /> : null}
        </div>

        
    )
    
} 

export default UserProfile