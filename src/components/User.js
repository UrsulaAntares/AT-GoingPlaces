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
            <div  className="comp user card column is-half">{this.props.user.username}</div>
        )
    }
} 

export default User