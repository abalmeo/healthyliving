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

                <div className="container journalEntryAlignment">
                    <div className="journalHeading">
                        Journal Entries
                    </div>

                    <div className>
                        {this.state.journalEntry.map(profile => (
                            <div key={profile.date} id="accordian">
                                <Collapsible 
                                className = "collapseStyling"
                                trigger = {`Date: ${profile.date} Title: ${profile.title}`}
                                transitionTime ='30'                           
                                >
                                    <p>{profile.entry}</p>
                                </Collapsible>
                            </div>

                        ))}
                    </div>
                    
                </div>
        
            </div>
            


        );
    }
}

export default JournalEntry;
