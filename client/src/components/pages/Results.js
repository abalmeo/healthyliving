import React, { Component } from 'react';
import axios from "axios";
import { Redirect } from "react-router-dom";
import BloodGlucoseChart from "../../components/graphs/BloodGlucose";
import BodyWeightChart from "../../components/graphs/BodyWeight";
import JournalEntry from "../../components/pages/JournalEntry";


class Results extends Component {
    constructor() {
        super();
        this.state = {
            results: []
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
                    <div className="graphSpacing">
                        <BloodGlucoseChart />
                    </div>
                    <div className="graphSpacing">
                        <BodyWeightChart />
                    </div>
                </div>
    

            <div className="journalEntryAlignment col-sm-12">
                <div>
                    <JournalEntry />
                </div>
            </div>
            </div>            


        );
    }
}

export default Results;
