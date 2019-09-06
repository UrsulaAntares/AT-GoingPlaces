import React from 'react'

class Login extends React.Component {

    constructor() {
        super()

        this.state={
            loremIpsum: 'Urs says hi from the Login'
        }
    }

    render() {
        return(
            <div className="comp login">This is the Login </div>
        )
    }
} 

export default Login