import React from 'react'
import Trip from '../components/Trip';

class TripList extends React.Component {

    constructor() {
        super()

        this.state={
            trips: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:4000/trips')
        .then(resp => resp.json())
        .then(trip => {
            this.setState({
                trips: trip
            })
        })
    }

    render() {
        return(
            <div>
                <section className="hero is-info is-large">
                    <div className="hero-body">
                        <div className="container">
                        <h1 className="title">
                            Large title
                        </h1>
                        <h2 className="subtitle">
                            Large subtitle
                        </h2>
                        </div>
                    </div>
                </section>
                <div>Current Trip Plan</div>
                <div>
                    Current Trip
                </div>
                <button>
                    Create a New Trip
                </button>
                <div>All Trips</div>
                <div className="comp tripList">
                    {
                        this.state.trips.map(trip => {
                            return <Trip key = {trip.id} trip = {trip} />
                        })
                    }
                </div>
            </div>
        )
    }
} 

export default TripList