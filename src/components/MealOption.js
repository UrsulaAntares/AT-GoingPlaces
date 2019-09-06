import React from 'react'

class MealOption extends React.Component {

    constructor() {
        super()

        this.state={
            loremIpsum: 'Urs says hi from Meal Option'
        }
    }

    render() {
        return(
            <div  className="comp mealoption">This is a MealOption </div>
        )
    }
} 

export default MealOption