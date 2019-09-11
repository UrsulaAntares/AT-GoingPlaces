import React from 'react'
import Budget from './Budget'
import LodgingOption from './LodgingOption'

class TripDetail extends React.Component {
    render() {
        const lodgingOption = () => {
            let propValue;
            for(let propName in this.props.trip) {
            propValue = this.props.trip[propName]
            console.log(propName,propValue);
            if (propName === 'lodging_options') {
                propValue = propValue.map(option => option)
                return propValue
            }
        }
        }
        console.log(lodgingOption())
        return( 
            <div className = "columns">
                <div className = "column">
                    <LodgingOption />
                </div>
                <div className = "column">
                    <Budget />
                </div>
            </div>
        )
    }
} 

export default TripDetail