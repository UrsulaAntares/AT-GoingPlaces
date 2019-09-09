import React from 'react'
import Trip from '../components/Trip';
import image from '/Users/ashley/Desktop/GoingPlaces App/GoingPlaces Frontend/AT-GoingPlaces/src/adventure-beautiful-beautiful-sunset-2897548.jpg'

class TripList extends React.Component {

    constructor() {
        super()

        this.state={
            trips: [],
            index: 0
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

    // show 4 trips
  fourTrips = () => {
    return this.state.trips.slice(this.state.index, this.state.index + 4)
  }

    render() {
        const styles = {
            heroInfo: {
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }
        };
        return(
            <div>
                <section className="hero is-info is-medium" style = {styles.heroInfo}>
                    <div className="hero-body">
                    </div>
                </section>

                <nav className="level">
                    <p className="level-item has-text-centered">
                        All Trips
                    </p>
                </nav>

                <div className="comp tripList columns">
                    {
                        this.fourTrips().map(trip => {
                            return <Trip key = {trip.id} trip = {trip} />
                        })
                    }
                </div>
            </div>
        )
    }
} 

export default TripList