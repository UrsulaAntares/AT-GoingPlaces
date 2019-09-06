import React from 'react'

class LodgingOption extends React.Component {

    constructor() {
        super()

        this.state={
            loremIpsum: 'Urs says hi from LodgingOption'
        }
    }

    render() {
        return(
            
            <div  className="comp lodgingOption" >This is a LodgingOption </div>
        )
    }
} 

export default LodgingOption