import React, { Component } from 'react';
import Collapsible from 'react-collapsible';
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
                    entry: "Lorem Ipsum has been the industry's standard dummy ",
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

                    {this.state.journalEntry.map(profile => (
                        <div key={profile.date} id="accordian">
                            
                
                            
                            <div className="card">
                                <div className="card-header" id={`heading${profile.date}`}>
                                    <h5 className="mb-0">
                                        <button className="btn btn-link" data-toggle="collapse" data-target={`#collapse${profile.date}`} aria-expanded="true" aria-controls={`collapse${profile.date}`}>
                                            {profile.date}, {profile.title}
                                        </button>
                                    </h5>
                                </div>

                                <div id={`collapse${profile.date}`} className="collapse show" aria-labelledby={`heading${profile.date}`} data-parent="#accordion">
                                    <div className="card-body">
                                        {profile.entry}
                                    </div>
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
