import React, { Component } from 'react';
import classnames from 'classnames';
import { Redirect } from "react-router-dom";
import axios from "axios";

class Login extends Component {
    constructor() {
        super(); 
        this.state = {
            email: "",
            password:"",
            errors: {},
            redirectTo: null
        }

        this.onChange = this.onChange.bind(this); 
        this.onSubmit = this.onSubmit.bind(this); 
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value}); 
    }

    onSubmit(e){
        e.preventDefault(); 
        const user = {
            email: this.state.email,
            password: this.state.password
        }
    }

render(){
    const {errors} = this.state; 
    
    return(
    
    <div className="login">
    <div className="container">
        <div className="row">
        <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Log In</h1>
            <p className="lead text-center">
            Sign in to your Healthy Living account
            </p>
            <form onSubmit={this.onSubmit}>
            <div className ="form-group">
            <input
                placeholder="Email Address"
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.onChange}
                error={errors.email}
            />
            </div>

            <div>

            <input
                placeholder="Password"
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.onChange}
                error={errors.password}
            />
            </div>
            <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
        </div>
        </div>
    </div>
    </div>

    );

}

    
}

export default Login;