import React from 'react'
import BudgetSnapShotContainer from '../containers/BudgetSnapShotContainer'

class Trip extends React.Component {

    render() {
        return( 
            <div className="comp trip">
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src="/Users/ashley/Desktop/GoingPlaces App/GoingPlaces Frontend/AT-GoingPlaces/chris-karidis-nnzkZNYWHaU-unsplash.jpg" alt="Placeholder image" />
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
                            <p className="title">John Smith</p>
                            {/* destination */}
                            <p className="subtitle is-6">@johnsmith</p>
                            {/* people */}
                        </div>
                    </div>
                </div>
                <BudgetSnapShotContainer />
            </div>
        )
    }
} 

export default Trip