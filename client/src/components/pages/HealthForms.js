import React, { Component } from 'react';
import axios from "axios";
import { Redirect } from "react-router-dom";
import DateTime from "../../components/pages/DatePicker";



class HealthForms extends Component {
  constructor(){
      super();
          this.state = {
                name:"",
                bodyWeight:"",
                bloodGlucose:"",
                bloodPressure:"",
                dateTime:"",
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
        const data = {
            bodyWeight: this.state.bodyWeight,
            bloodGlucose: this.state.bloodGlucose,
            bloodPressure: this.state.bloodPressure,
            dateTime: this.state.dateTime
    
        }
    }
      
  
  
  
    render() {
    return (
      <div className="healthforms">
        <div className="container">
        <DateTime/>

        <form>
 
        <div className="form-group row">
            <label htmlFor="inputBodyWeight" className="col-sm-12 col-form-label">Body Weight</label>
            <div className="col-sm-12">
            <input type="number" className="form-control" id="inputBodyWeight" placeholder="Body Weight (lbs)"></input>
            </div>
        </div>
        <div className="form-group row">
            <label htmlFor="inputBloodGlucose" className="col-sm-12 col-form-label">Blood Glucose</label>
            <div className="col-sm-12">
            <input type="number" className="form-control" id="inputBloodGlucose" placeholder="Blood Glucose (mg/dL)"></input>
            </div>
        </div>
        <div className="form-group row">
            <label htmlFor="inputBloodPressure" className="col-sm-12 col-form-label">Blood Pressure</label>
            <div className="col-sm-6">
                <label htmlFor="inputBloodPressure" className="col-sm-6 col-form-label">Systolic</label>
                <input type="number" className="form-control" id="inputBloodPressure" placeholder="mm Hg(higher)"></input>
            </div>
            <div className="col-sm-6">
            <label htmlFor="inputBloodPressure" className="col-sm-6 col-form-label">Diastolic</label>
            <input type="number" className="form-control" id="inputBloodPressure" placeholder="mm Hg(lower)"></input>
            </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    
        </div>
      </div>
    );
  }
}

export default HealthForms;
