import React from 'react'

class Snapshot extends React.Component {

    constructor() {
        super()

        this.state={
            loremIpsum: 'Urs says hi from Snapshot'
        }
    }

    render() {
        return(
            <div  className="comp snapshot">Trip Snapshot </div>
        )
    }
} 

export default Snapshot