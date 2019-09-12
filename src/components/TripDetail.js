import React from 'react'
import Budget from './Budget'
import LodgingOption from './LodgingOption'
import AddUserForm from './AddUserForm';
import LodgingOptionForm from './LodgingOptionForm';

class TripDetail extends React.Component {
    render() {

       
        return( 
            <div className = "columns">
                <div className = "column is-three-fifths">
                    {/* <LodgingOptionForm trip = {this.props.trip} /> */}

                    {this.props.trip ? this.props.trip.lodging_options.map(lodging => {
                        return <LodgingOption lodging = {lodging}/>
                    }) : null }

                    {this.props.trip ?   <AddUserForm trip = {this.props.trip}/> : null }

                </div>
                <div className = "column">
                    <Budget />
                </div>
            </div>
        )
    }
} 

export default TripDetail