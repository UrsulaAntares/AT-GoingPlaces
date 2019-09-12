import React from 'react'



class AddUserForm extends React.Component {

    constructor() {
        super()
        this.state = {
        }
    }



    makeTheOption = (event) => {

        // let data = {user_id: user_id, trip_id: trip_id } //still gotta find these params kid
            let data = {trip_id: this.props.trip.id, user_id: event.currentTarget.user_id.value}

        event.preventDefault()
        console.log("you're trying to add a user")
        fetch("http://localhost:4000/user_trips", { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(userTrip => this.props.functionToRender(userTrip.user_id))
        // The behavior we want is to show the trip detail page w/this minimized after complete
    }


    getUsers=()=>{
        let allUsers = []
        fetch('http://localhost:4000/users').then(res => res.json()).then(users => {
            
            allUsers.push(...users)       
    })
        
        this.setState({allUsers: allUsers})
    }

    componentDidMount(){
        this.getUsers()
    }

    render() {
        
  
        return (
        <div className="comp box optionform form">
            <section className="hero is-primary">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                            <form action="" className="box" onSubmit={(event) => this.makeTheOption(event)}>
                                
                                <div className="field">
                                    <label name="users" className="label">Who's coming on this trip?</label>
                                    <input list="users" name="user_id"/>
                                    <datalist id="users">
                                        {/* refactor this to use the ACTUALLY RELEVANT USERS if they ever have friends */}
                                        {/* {this.state.allUsers ? this.state.allUsers.map(user => <option value={user.id}>{user.username}</option>): console.log("too bad about no users in state")} */}
                                        {this.props.allUsers ? this.props.allUsers.map(user => <option value={user.id}>{user.username}</option>): console.log("too bad about no users passed as props")}
                                    </datalist>
                                </div>
                                <input type="submit" className="button"/>
                            </form>
                        </div>
                    </div>
                </div>        
            </div>
        </section>
            
            
        </div>
        )
    }

}

export default AddUserForm