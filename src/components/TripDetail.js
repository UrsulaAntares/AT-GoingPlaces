import React from 'react'
import Budget from './Budget'
import LodgingOptionForm from './LodgingOptionForm';

class TripDetail extends React.Component {
    // debugger // really this shoud be examined some -- props os not just props but match and alllll the rest
    // props.match.params.id = the trip id 

    constructor() {
        super()
        this.state = {
            trip: {}
        }
    }

    componentDidMount(){
        this.getThisTrip()
    }
    
    getThisTrip=()=>{
        fetch(`http://localhost:4000/trips/${this.props.match.params.id}`).then(res => res.json())
        .then(trip => this.setState({trip: trip}))
    }

    render() {
        // debugger
        return( 
            <div className = "columns">
                <div className = "column">
                    <h3>{this.state.trip ? this.state.trip.name : null}</h3>
                    {/* This (below) needs to be refactored to take in props for trip */}
                    <LodgingOptionForm trip_id={this.props.match.url.split("/")[2]}/>
                    <LodgingOptionForm trip_id={27}/>
                    
                </div>
                <div className = "column">
                    <Budget />
                </div>
            </div>
        )
    }
} 

export default TripDetail