import React from 'react'
import BudgetSnapShotContainer from '../containers/BudgetSnapShotContainer'

class Trip extends React.Component {

    constructor() {
        super()

        this.state={
            loremIpsum: 'Urs says hi from Trip'
        }
    }

    render() {
        return( 
            <div className="comp trip">
                <div>This is a Trip </div>
                <BudgetSnapShotContainer />
            </div>
        )
    }
} 

export default Trip