import React from 'react'
import BudgetSnapShotContainer from '../containers/BudgetSnapShotContainer'
import Placeholder from '/Users/ashley/Desktop/GoingPlaces App/GoingPlaces Frontend/AT-GoingPlaces/src/chris-karidis-nnzkZNYWHaU-unsplash.jpg'

class Trip extends React.Component {

    render() {
        return( 
            <div className="comp trip column is-one-quarter">
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src={Placeholder} alt="Placeholder image" />
                        </figure>
                    </div>
                </div>
                <div className="card-content">
                    <div className="columns">
                        <div className="column is-half">
                            <p>{this.props.trip.name}</p>
                            <p>{this.props.trip.date}</p>
                        </div>
                        <div className="column is-half">
                            <span className="icon">
                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                            </span>
                            <p>{this.props.trip.name}</p>
                            
                            <p className="subtitle is-6">{this.props.trip.users.map(user => user.name + ' ')} </p>
                            
                        </div>
                    </div>
                </div>
                <BudgetSnapShotContainer />
            </div>
        )
    }
} 

export default Trip