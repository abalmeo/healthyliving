import React, { Component } from 'react';
import axios from "axios";
import { Redirect } from "react-router-dom";



class Journal extends Component {
  constructor(){
      super();
          this.state = {
                date:"",
                journalEntry:""
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
    
                <p>        
                  How do you feel today?
                </p>
          </div>
      </div>
    );
  }
}

export default Journal;
