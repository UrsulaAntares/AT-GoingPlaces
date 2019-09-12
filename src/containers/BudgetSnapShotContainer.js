import React from 'react'
import Budget from '../components/Budget';
import Snapshot from '../components/SnapShot';

class BudgetSnapshot extends React.Component {

    constructor() {
        super()

        this.state={
            loremIpsum: 'Urs says hi from BudgetSnapshot'
        }
    }

    render() {
        return(
            <div className="budgetSnapshots">
                <h3>Budget Snapshot</h3>
                <Budget
                    trip = {this.props.trip}
                />
                <Snapshot />
            </div>
        )
    }
} 

export default BudgetSnapshot