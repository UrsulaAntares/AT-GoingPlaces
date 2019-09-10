import React from 'react'
import Budget from './Budget'

const TripDetail = (props) => {
    debugger
    return( 
        <div className = "columns">
            <div className = "column">
                <h3>{props.trip.name}</h3>
            </div>
            <div className = "column">
                <Budget />
            </div>
        </div>
    )
} 

export default TripDetail