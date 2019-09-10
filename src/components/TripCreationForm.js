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
        //this does not work; think the problem lies in EITEHR the fact that it can't go into the chained .then fetches below 
        // OR Ursula does not properly understand when where how to use route redirect 
    }

    makeTheTrip = (event) => {
        
        let data = {name: event.currentTarget.tripname.value, date: event.currentTarget.date.value}
        event.preventDefault()
        // console.log("you're making a trip")
        fetch("http://localhost:4000/trips", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(trip =>  this.goToTrip(trip.id) )
        // Challenge now: make this SHOW the trip
        // go to the trip's page
        // the trip.id here is correct but not sure how to make the page re-route; reexamine the router labs
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
                                <div className="field">
                                    {/* <label for="tripname" className="label">Name your trip</label> */}
                                    <input name="tripname" className="input" type="text" placeholder="Name your trip" />
                                </div>
                                <div className="field">
                                    {/* <label for="date" className="label">When will it happen?</label> */}
                                <input name="date" className="input" type="date"  />
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

export default TripCreationForm