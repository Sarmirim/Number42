import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'

class Profile extends Component {
    constructor() {
        super()
        this.state = {
        username: '',
        role: '',
        email: '',
        errors: {}
        }
    }

    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
        username: decoded.username,
        role: decoded.role,
        email: decoded.email
        })
    }

    render() {
        return (
        <div className="container">
            <div className="jumbotron mt-5">
                <div className="col-sm-8 mx-auto">
                    <h1 className="text-center">Hello {this.state.username}</h1>
                </div>
            </div>
        </div>
        )
    }
}

export default Profile
