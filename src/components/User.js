import React from 'react'

class User extends React.Component {

    constructor() {
        super()

        this.state={
            loremIpsum: 'Urs says hi from User'
        }
    }

    render() {
        return(
            <div  className="comp user">This is a User</div>
        )
    }
} 

export default User