import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
// import Destinations from 'http://localhost:4000/destinations'

class LodgingOptionForm extends React.Component {

    constructor() {
        super()
        this.state = {
        }
    }



    makeTheOption = (event) => {

        let data = {name: event.currentTarget.optionName.value, destination_id: event.currentTarget.destination_id.value, trip_id: parseInt(this.props.trip_id) }
        
        event.preventDefault()
        console.log("you're making a lodgingOption")
        fetch("http://localhost:4000/lodging_options", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
        // The behavior we want is to show the trip detail page w/this minimized after complete
    }

    getDestinations=()=>{
        let allDestinations = []
        fetch('http://localhost:4000/destinations').then(res => res.json()).then(destinations => {
            allDestinations.push(...destinations)       
    })
        this.setState({allDestinations: allDestinations})
    } //this might be deprecated in favor of passing in props

    componentDidlMount(){
        this.getDestinations()

        //may be deprecated
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
                                    {/* <label for="optionname" className="label">Where should we stay?</label> */}
                                    <input name="optionName" className="input" type="text" placeholder="Where should we stay?" />
                                </div>
                                <div className="field">
                                    {/* <label for="location" className="label">Location</label> */}
                                    <input list="destinations" name="destination_id"/>
                                    <datalist id="destinations">
                                        {/* refactor this to use the ACTUALLY RELEVANT LOCATIONS instead of every location */}
                                        {this.props.allDestinations ? this.props.allDestinations.map(destination => <option value={destination.id}>{destination.name}</option>): console.log("too bad about no destinations in state")}
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

export default LodgingOptionForm
