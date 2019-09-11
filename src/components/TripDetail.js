import React from 'react'
import Budget from './Budget'
import LodgingOption from './LodgingOption'

class TripDetail extends React.Component {
    render() {
        return( 
            <div className = "columns">
                <div className = "column is-three-fifths">
                    {
                        this.props.trip ? this.props.trip.lodging_options.map(lodging => {
                return <LodgingOption lodging = {lodging}/>
            }) : null
                    }
                </div>
                <div className = "column">
                    <Budget />
                </div>
            </div>
        )
    }
} 

export default TripDetail