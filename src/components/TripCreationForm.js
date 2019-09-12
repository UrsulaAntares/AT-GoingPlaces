import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

class TripCreationForm extends React.Component {

    constructor() {
        super()
        this.state = {
            tripname: null,
            date: null
        }
    }

    goToTrip = (id) => {
        return <Redirect to={`http://localhost:3000/trips/${id}`} />
     }
 


    makeTheTrip = (event) => {
        
        let data = {name: event.currentTarget.tripname.value,   
            date: event.currentTarget.date.value, username: window.localStorage.username}
        event.preventDefault()
        // console.log("you're making a trip")
        fetch("http://localhost:4000/trips", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(trip =>  this.goToTrip(trip.id) )
        
    }

    render() {

        return (
        <div className="comp box tripcreationform form">
            <section className="hero is-primary is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                            <form action="" className="box" onSubmit={(event) => this.makeTheTrip(event)}>
                                <h3>Ready to Plan Your Trip?</h3>
                                <div className = "inner-form-box">
                                <div className="field">
                                    {/* <label for="tripname" className="label">Name your trip</label> */}
                                    <input name="tripname" className="input" type="text" placeholder="Name your trip" />
                                </div>
                                <div className="field">
                                    <label for="date" className="label">Choose a Date</label>
                                <input name="date" className="input" type="date" />
                                </div>
                                <input type="submit" className="button"/>
                                </div>
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

export default TripCreationForm
