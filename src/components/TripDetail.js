import React from 'react'
import Budget from './Budget'
import LodgingOption from './LodgingOption'
import AddUserForm from './AddUserForm';
import LodgingOptionForm from './LodgingOptionForm';
import User from './User'

class TripDetail extends React.Component {
    constructor() {
        super()
        this.state = {
            lodgingCost: 0,
            transportationCost: 0,
            foodCost: 0,
            users: []
        }
    }

    // handleSelect = (event) => {
    //     console.log('clicked!', parseInt(event.currentTarget.textContent.split(" ").splice(-1)[0]))
    //     return parseInt(event.currentTarget.textContent.split(" ").splice(-1)[0])
    // }

    functionToRender=(user_id)=>{
        let user = this.state.allUsers.find(user => user.id === user_id)
  
        this.setState({users: [...this.state.users, user]})
    }



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
        if (this.props.trip) {
        this.setState({users: this.props.trip.users})  }      
        console.log("These are the users", this.state.users)
    }

    getAllUsers=()=>{
        let allUsers = []
        fetch('http://localhost:4000/users').then(res => res.json()).then(users => {
            
            allUsers.push(...users)       
    })
        this.setState({allUsers: allUsers})
        console.log("We got the users in TripDetail", this.state.allUsers)
    }

    getDestinations=()=>{
        let allDestinations = []
        fetch('http://localhost:4000/destinations').then(res => res.json()).then(destinations => {
            allDestinations.push(...destinations)       
    })
        this.setState({allDestinations: allDestinations})
        console.log("We got the destinations in TripDetail", this.state.allDestinations)
    }

    componentWillMount(){
        this.getUsers()
        this.getAllUsers()
        this.getDestinations()

    }

    render() {

       
        return( 
            <div className = "columns is-multiline">
                <div className = "column is-three-fifths">
                    {this.props.trip ? <LodgingOptionForm trip = {this.props.trip} allDestinations={this.state.allDestinations}/> : null }

                    {this.props.trip ? this.props.trip.lodging_options.map(lodging => {
                        return <LodgingOption lodging = {lodging}/>
                    }) : null }

                    {this.props.trip ?   <AddUserForm trip={this.props.trip}  allUsers={this.state.allUsers} functionToRender={this.functionToRender}/> : null }
                    {this.state.users ? this.state.users.map(user => <User user={user} />) : null }
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

