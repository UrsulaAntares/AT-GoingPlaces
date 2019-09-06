import React from 'react'
import User from '../components/User';

class UsersList extends React.Component {

    constructor() {
        super()

        this.state={
            loremIpsum: 'Urs says hi from Users'
        }
    }

    render() {
        return(
            <div  className="comp usersList">
                <div>This is a List of Users</div>
                <User />
                <User />
                <User />
            </div>
        )
    }
} 

export default UsersList