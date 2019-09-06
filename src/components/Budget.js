import React from 'react'

class Budget extends React.Component {

    constructor() {
        super()

        this.state={
            loremIpsum: 'Urs says hi from Budget'
        }
    }

    render() {
        return(
            <div  className="comp budget">Budget Overview</div>
        )
    }
} 

export default Budget