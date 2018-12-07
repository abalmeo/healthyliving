import React, { Component } from 'react';
import axios from "axios";
import { Redirect } from "react-router-dom";
import DateTime from "../../components/pages/DatePicker";


class Journal extends Component {
    constructor() {
        super();
        this.state = {
            date: "",
            journalEntry: ""
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
            <div className="journal">
                <div className="container">
                <div>
                </div>
                <DateTime/>
                    <form>
                        <div class="form-group">
                            <textarea class="form-control" placeholder="How are you feeling today?" id="journalEntry" rows="15"></textarea>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}

export default Journal;
