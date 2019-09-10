import React from 'react'
import Trip from './Trip'
import Budget from './Budget'

const TripDetail = ({ match, trip }) => {
    console.log(trip)
    return( 
        <div className = "columns">
            <div className = "column">
                <h3>{trip[match.params.id].name}</h3>
                <Trip trip = {trip}/>
            </div>
            <div className = "column">
                <Budget />
            </div>
        </div>
    )
} 

export default TripDetail