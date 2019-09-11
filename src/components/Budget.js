import React from 'react'
import LodgingOption from './LodgingOption'
import MealOption from './MealOption'

class Budget extends React.Component {

    constructor() {
        super()

        this.state={
            loremIpsum: 'Urs says hi from Budget'
        }
    }

    render() {
        return(
            <div>
                <div  className="comp budget">
                    Budget Overview
                </div>
                <div>
                    <LodgingOption />
                    <MealOption />
                </div>
            </div>
        )
    }
} 

export default Budget