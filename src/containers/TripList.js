import React from 'react'
import Trip from '../components/Trip';

class TripList extends React.Component {

    constructor() {
        super()

        this.state={
            loremIpsum: 'Urs says hi from TripList'
        }
    }

    render() {
        return(
            <div  className="comp tripList">
                <div>This is a List of Trips</div>
                <Trip />
                <Trip />
                <Trip />
            </div>
        )
    }
} 

export default TripList