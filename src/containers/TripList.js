import React from 'react'
import { Link } from 'react-router-dom'
import Trip from '../components/Trip';
import image from '../adventure-beautiful-beautiful-sunset-2897548.jpg'

const TripList = ({ trips }) => {

    const renderTrips = trips.map(trip => {
        return <Trip key = {trip.id} trip = {trip} />
    })
    // {trips[tripID].name}
        return(
            <div>
                <nav className="level">
                    <p className="level-item has-text-centered">
                        All Trips
                    </p>
                </nav>

                <div className="comp tripList columns is-multiline">
                    {renderTrips}
                </div>
            </div>
        )
} 

export default TripList