import React from 'react'

class Login extends React.Component {

    constructor() {
        super()

        this.state={
            username: "",
            password: ""
        }
    }

    handleChange = (e, {name, value}) => {
        this.setState({[name]: value});
    }


    handleLoginSubmit = (event) => {
        event.preventDefault()
        console.log("you're trying to get users")
        this.setState({username: event.currentTarget.username.value})
        this.setState({password: event.currentTarget.password.value})
        if (this.state.username) {
        fetch(`http://localhost:3001/users/${this.state.username}`)
            .then(res => res.json())
            .then(user  => {
                
                this.props.updateUser(user)
                console.log(user)}
                )
            }
    }

    getUsers=()=> {
        let users;
        console.log("you're trying to get users")
        // fetch('http://localhost:3001/users').then(res=>res.json()).then(gottenusers => users.push(gottenusers))
        console.log(users)
        return users
    }

    checkUser = (event) => {
        event.preventDefault()
        console.log("Checking User", event.currentTarget.username.value)
        this.setState({user: event.currentTarget.username.value})
    }

    render() {
        return(
            <div className="comp login box">
                <form onSubmit={(event) => this.handleLoginSubmit(event)}>
                    <input name="username" className="input" type="text" placeholder="Username" />
                    <input name="password" className="input" type="password" placeholder="Password" />
                    <input type="submit" className="button"/>
                </form>
            </div>
        )
    }
} 

export default Login