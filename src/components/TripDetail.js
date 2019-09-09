import React from 'react'
import Trip from './Trip'
import Budget from './Budget'

class TripDetail extends React.Component {

    render() {
        return( 
            <div className = "columns">
                <div className = "column">
                    {this.props.match.params.id}
                    <Trip />
                </div>
                <div className = "column">
                    <Budget />
                </div>
            </div>
        )
    }
} 

export default TripDetail