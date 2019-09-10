import React from 'react'
import Trip from '../components/Trip'
import TripDetail from '../components/TripDetail'
import TripCreationForm from '../components/TripCreationForm'

const UserProfile = (props) => {
    //don't forget to use the props and destructure -- but you need more interesting props than name. Serialize some trips!
    
    // Problem to watch for: when content first loads, the props are undefined.  
    // They only come in after loading once state is set
    
    return(
        <div  className="comp user box">
            <h1>{props.username}'s Plans</h1>
            {props.trips ? props.trips.map(trip => <Trip name={trip.name}/>): null}
            
            {/* Currently NOT hiding this from users who have other trips in order to get it working first */}
             <TripCreationForm />
            
        </div>

        
    )
    
} 

export default UserProfile