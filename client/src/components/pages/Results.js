import React, { Component } from 'react';
import axios from "axios";
import { Redirect } from "react-router-dom";
import Chart from "../../components/pages/Graphs";


class Results extends Component {
    constructor() {
        super();
        this.state = {
            results:[]
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
            date: this.state.date,
            journalEntry: this.state.journalEntry,
        }
    }




    render() {
        return (
            <div className="results">
                <div className="container">
                    <div>
                        <Chart/>
                    </div>
                </div>
            </div>

        );
    }
}

export default Results;
