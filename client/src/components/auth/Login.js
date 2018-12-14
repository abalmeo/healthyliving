import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import axios from "axios";

class Login extends Component {
    constructor() {
        super(); 
        this.state = {
            userNum: "",
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

    
}

export default Login;