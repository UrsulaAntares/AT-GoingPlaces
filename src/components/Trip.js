import React from 'react'
import BudgetSnapShotContainer from '../containers/BudgetSnapShotContainer'
import Placeholder from '../chris-karidis-nnzkZNYWHaU-unsplash.jpg'
import { Link } from 'react-router-dom'

class Trip extends React.Component {
    

    render() {
        let date = new Date(this.props.trip.date);
        return( 
            <div className="comp trip column is-one-quarter">
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src={Placeholder} alt="Placeholder image" />
                        </figure>
                    </div>
                </div>
                <div className="card-content trip-card">
                    <div className="columns">
                        <div className="column">
                            <p><strong>Destination: </strong>{this.props.trip.name}
                            <br />
                            <strong>Date: </strong>{date.toLocaleDateString("en-us")}
                            <br />
                            <Link key = {this.props.trip.id} to = {`/trips/${this.props.trip.id}`}>See Trip</Link>
                            </p>
                            <p className="subtitle is-6">{this.props.trip.users ? this.props.trip.users.map(user => user.name + ' '): null} </p>
                        </div>
                    </div>
                </div>
                <BudgetSnapShotContainer
                    trip = {this.props.trip}
                />
            </div>
        )
    }
} 

export default Trip