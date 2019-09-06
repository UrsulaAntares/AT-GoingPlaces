import React from 'react'

class NavBar extends React.Component {

    constructor() {
        super()

        this.state={
            loremIpsum: 'Urs says hi from NavBar'
        }
    }

    render() {
        return(
            <div className="comp navbar">This is a Nav Bar </div>
        )
    }
} 

export default NavBar