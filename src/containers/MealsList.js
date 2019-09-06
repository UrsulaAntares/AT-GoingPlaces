import React from 'react'
import DineIn from '../components/DineIn';
import MealOption from '../components/MealOption';

class MealsList extends React.Component {

    constructor() {
        super()

        this.state={
            loremIpsum: 'Urs says hi from LodgingOptionList'
        }
    }

    render() {
        return(
            <div  className="comp mealsList">
                <div>This is a List of Meals</div>
                <div>
                    <MealOption />
                    <MealOption />
                </div>
                <div>
                    <DineIn />
                    <DineIn />
                </div>
            </div>
        )
    }
} 

export default MealsList