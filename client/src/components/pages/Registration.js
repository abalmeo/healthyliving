import React, { Component } from 'react';
import axios from "axios";
import { Redirect } from "react-router-dom";



class Registration extends Component {
    constructor() {
        super();
        this.state = {
            profile:[]
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const entry = {
            profile: this.state.profile,
        }
    }




    render() {
        return (
            <div className="registration">
                <div className="container">
                    <div>
                        Registration Page
                    </div>
                </div>
            </div>

        );
    }
}

export default Registration;
