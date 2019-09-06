import React from 'react'

class DineIn extends React.Component {

    constructor() {
        super()

        this.state={
            loremIpsum: 'Urs says hi from DineIn'
        }
    }

    render() {
        return(
            <div  className="comp dineIn">This is a DineIn </div>
        )
    }
} 

export default DineIn