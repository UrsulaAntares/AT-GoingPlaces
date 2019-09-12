import React from 'react'

import LodgingOption from './LodgingOption'
import MealOption from './MealOption'

import Placeholder from '../philipe-cavalcante-Kniw5HcqeII-unsplash.jpg'

class Budget extends React.Component {

    render() {
        return(
            <div className="card budget-card">
                <div className="card-image">
                    <figure className="image is-3by3">
                    <img src={Placeholder} alt="Placeholder image"/>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <table className = "table">
                            <tbody>
                                <tr>
                                    <td>Lodging</td>
                                    <td></td>
                                    <td>{this.props.lodgingOptionCost}</td>
                                </tr>
                                <tr>
                                    <td>Transportation</td>
                                    <td></td>
                                    <td>{this.props.transportationCost}</td>
                                </tr>
                                <tr>
                                    <td>Food</td>
                                    <td></td>
                                    <td>{this.props.foodCost}</td>
                                </tr>
                                <tr>
                                    <td>Total</td>
                                    <td></td>
                                    <td>{this.props.total}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                </div>
        )
    }
} 

export default Budget