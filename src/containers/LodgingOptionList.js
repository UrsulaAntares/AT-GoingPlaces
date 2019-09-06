import React from 'react'
import LodgingOption from '../components/LodgingOption';

class LodgingOptionList extends React.Component {

    constructor() {
        super()

        this.state={
            loremIpsum: 'Urs says hi from LodgingOptionList'
        }
    }

    render() {
        return(
            <div  className="comp lodgingOptions">
                <div>This is a List of LodgingOptions</div>
                <LodgingOption />
                <LodgingOption />
            </div>
        )
    }
} 

export default LodgingOptionList