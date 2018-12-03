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
        <DateTime/>

        <form>
 
        <div class="form-group row">
            <label for="inputBodyWeight" class="col-sm-12 col-form-label">Body Weight</label>
            <div class="col-sm-12">
            <input type="number" class="form-control" id="inputBodyWeight" placeholder="Body Weight (lbs)"></input>
            </div>
        </div>
        <div class="form-group row">
            <label for="inputBloodGlucose" class="col-sm-12 col-form-label">Blood Glucose</label>
            <div class="col-sm-12">
            <input type="number" class="form-control" id="inputBloodGlucose" placeholder="Blood Glucose (mg/dL)"></input>
            </div>
        </div>
        <div class="form-group row">
            <label for="inputBloodPressure" class="col-sm-12 col-form-label">Blood Pressure</label>
            <div class="col-sm-6">
                <label for="inputBloodPressure" class="col-sm-6 col-form-label">Systolic</label>
                <input type="number" class="form-control" id="inputBloodPressure" placeholder="mm Hg(higher)"></input>
            </div>
            <div class="col-sm-6">
            <label for="inputBloodPressure" class="col-sm-6 col-form-label">Diastolic</label>
            <input type="number" class="form-control" id="inputBloodPressure" placeholder="mm Hg(lower)"></input>
            </div>
        </div>
        </form>
    
        </div>
      </div>
    );
  }
}

export default HealthForms;
