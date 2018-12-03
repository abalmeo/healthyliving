import React, { Component } from 'react';
import axios from "axios";
import { Redirect } from "react-router-dom";



class HealthForms extends Component {
  constructor(){
      super();
          this.state = {
                name:"",
                bodyWeight:"",
                bloodGlucose:"",
                bloodPressure:"",
                redirectTo:null
              }
              
              this.onChange = this.onChange.bind(this);
              this.onSubmit = this.onSubmit.bind(this);
        }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const profile = {
            bodyWeight: this.state.bodyWeight,
            bloodGlucose: this.state.bloodGlucose,
            bloodPressure: this.state.bloodPressure,
    
        }
    }
      
  
  
  
    render() {
    return (
      <div className="healthforms">
        <div className="container">
    
                <p>        
                  Input your form information
                </p>
          </div>
      </div>
    );
  }
}

export default HealthForms;
