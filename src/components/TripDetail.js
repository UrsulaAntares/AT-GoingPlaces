import React from 'react'
import Budget from './Budget'
import LodgingOption from './LodgingOption'
import AddUserForm from './AddUserForm';
import LodgingOptionForm from './LodgingOptionForm';

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

        /////////////////////////////


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

    /////

    




    render() {

       
        return( 
            <div className = "columns is-multiline">
                <div className = "column is-three-fifths">
                    {/* <LodgingOptionForm trip = {this.props.trip} /> */}

                    {this.props.trip ? this.props.trip.lodging_options.map(lodging => {
                        return <LodgingOption lodging = {lodging}/>
                    }) : null }

                    {this.props.trip ?   <AddUserForm trip={this.props.trip}  allUsers={this.state.allUsers}/> : null }

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

