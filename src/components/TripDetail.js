import React from 'react'
import Budget from './Budget'
import LodgingOption from './LodgingOption'
import AddUserForm from './AddUserForm';
import LodgingOptionForm from './LodgingOptionForm';

class TripDetail extends React.Component {

    constructor(){
        super()
        this.state={}
    }

    getUsers=()=>{
        let allUsers = []
        fetch('http://localhost:4000/users').then(res => res.json()).then(users => {
            
            allUsers.push(...users)       
    })
        
        this.setState({allUsers: allUsers})
        console.log("We got the users in TripDetail", this.state.allUsers)
    }

    componentWillMount(){
        this.getUsers()
    }


    render() {

       
        return( 
            <div className = "columns">
                <div className = "column is-three-fifths">
                    {/* <LodgingOptionForm trip = {this.props.trip} /> */}

                    {this.props.trip ? this.props.trip.lodging_options.map(lodging => {
                        return <LodgingOption lodging = {lodging}/>
                    }) : null }

                    {this.props.trip ?   <AddUserForm trip={this.props.trip}  allUsers={this.state.allUsers}/> : null }

                </div>
                <div className = "column">
                    <Budget />
                </div>
            </div>
        )
    }
} 

export default TripDetail