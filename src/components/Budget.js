import React from 'react'

import LodgingOption from './LodgingOption'
import MealOption from './MealOption'

class Budget extends React.Component {

    render() {
        return(
            <div className="card budget-card">
                <div className="card-image">
                    <figure className="image is-3by3">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <table className = "table">
                            <tr>
                                <td>Icon</td>
                                <td>Lodging</td>
                                <td>{this.props.lodgingOptionCost}</td>
                            </tr>
                            <tr>
                                <td>Icon</td>
                                <td>Transportation</td>
                                <td>{this.props.transportationCost}</td>
                            </tr>
                            <tr>
                                <td>Icon</td>
                                <td>Food</td>
                                <td>{this.props.foodCost}</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td></td>
                                <td>{this.props.total}</td>
                            </tr>
                        </table>
                    </div>
                </div>
                </div>
        )
    }
} 

export default Budget