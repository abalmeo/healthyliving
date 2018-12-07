import React, { Component } from 'react';
import axios from "axios";
import { Redirect } from "react-router-dom";



class JournalEntry extends Component {
    constructor() {
        super();
        this.state = {
            journalEntry: [
                {
                    date: "12/1/2018",
                    entry: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
                    title: "First Journal Entry"
                },
                {
                    date: "12/2/2018",
                    entry: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
                    title: "Second Journal Entry"
                },
            ]
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
                    {this.state.journalEntry.map(profile => (
                        <div key={profile.date} className="card card-body bg-light mb-3">
                            <div className="row">
                                <div className="col-lg-6 col-md-4 col-8">
                                    <h3>{profile.title}</h3>
                                    <p>{profile.entry}</p>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>

        );
    }
}

export default JournalEntry;
