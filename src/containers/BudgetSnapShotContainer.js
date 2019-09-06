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
            <div  className="comp budgetSnapshots">
                <div>This is a BudgetSnapshot</div>
                <Budget />
                <Snapshot />
            </div>
        )
    }
} 

export default BudgetSnapshot