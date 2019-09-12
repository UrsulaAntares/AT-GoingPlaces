import React from 'react'
import Budget from './Budget'
import LodgingOption from './LodgingOption'

class TripDetail extends React.Component {
    constructor() {
        super()
        this.state = {
            lodgingCost: 0,
            transportationCost: 0,
            foodCost: 0
        }
    }

    // handleSelect = (event) => {
    //     console.log('clicked!', parseInt(event.currentTarget.textContent.split(" ").splice(-1)[0]))
    //     return parseInt(event.currentTarget.textContent.split(" ").splice(-1)[0])
    // }

    lodgingCostCallback = (lodgingObj) => {
        console.log('clicked!', lodgingObj)
        this.setState({
            lodgingCost: lodgingObj.cost
        })
    }

    totalCost = () => {
        const {lodgingCost, transportationCost, foodCost} = this.state
        return parseInt(lodgingCost + transportationCost + foodCost)
    }

    render() {
        console.log(this.props)
        return( 
            <div className = "columns is-multiline">
                <div className = "column is-three-fifths">
                    {
                        this.props.trip ? this.props.trip.lodging_options.map(lodging => {
                return <LodgingOption lodging = {lodging} lodgingCallbackFromTripDetail = {this.lodgingCostCallback} />
            }) : null
                    }
                </div>
                <div className = "column is-one-quarter is-offset-1">
                    <Budget
                        lodgingOptionCost = {this.state.lodgingCost}
                        transportationCost = {this.state.transportationCost}
                        foodCost = {this.state.foodCost}
                        total = {this.totalCost()}
                    />
                </div>
            </div>
        )
    }
} 
// container without column sizes
// no container with column sizes

export default TripDetail

