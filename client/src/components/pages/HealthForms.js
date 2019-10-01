import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import DateTime from '../../components/pages/DatePicker';

const HealthForms = () => {
  const [healthData, setHealthData] = useState({
    name: '',
    bodyWeight: '',
    bloodGlucose: '',
    bloodPressure: '',
    systolic: '',
    diastolic: '',
    dateTime: '',
    redirectTo: null
  });
  const {
    name,
    bodyWeight,
    bloodGlucose,
    bloodPressure,
    systolic,
    diastolic,
    dateTime,
    redirectTo
  } = healthData;

  const onFormChange = e => {
    setHealthData({ ...healthData, [e.target.name]: e.target.value });
  };

  const onFormSubmit = e => {
    e.preventDefault();
    const data = {
      bodyWeight,
      bloodGlucose,
      bloodPressure,
      dateTime
    };
  };

  return (
    <div className="healthforms">
      <div className="container">
        <DateTime />

        <form className="form" onSubmit={e => onFormSubmit(e)}>
          <div className="form-group row">
            <label
              htmlFor="inputBodyWeight"
              className="col-sm-12 col-form-label"
            >
              Body Weight
            </label>
            <div className="col-sm-12">
              <input
                type="number"
                className="form-control"
                id="inputBodyWeight"
                placeholder="Body Weight (lbs)"
                value={bodyWeight}
                onChange={e => onFormChange(e)}
              ></input>
            </div>
          </div>
          <div className="form-group row">
            <label
              htmlFor="inputBloodGlucose"
              className="col-sm-12 col-form-label"
            >
              Blood Glucose
            </label>
            <div className="col-sm-12">
              <input
                type="number"
                className="form-control"
                id="inputBloodGlucose"
                placeholder="Blood Glucose (mg/dL)"
                value={bloodGlucose}
                onChange={e => onFormChange(e)}
              ></input>
            </div>
          </div>
          <div className="form-group row">
            <label
              htmlFor="inputBloodPressure"
              className="col-sm-12 col-form-label"
            >
              Blood Pressure
            </label>
            <div className="col-sm-6">
              <label
                htmlFor="inputBloodPressure"
                className="col-sm-6 col-form-label"
              >
                Systolic
              </label>
              <input
                type="number"
                className="form-control"
                id="inputBloodPressure"
                placeholder="mm Hg(higher)"
                value={systolic}
                onChange={e => onFormChange(e)}
              ></input>
            </div>
            <div className="col-sm-6">
              <label
                htmlFor="inputBloodPressure"
                className="col-sm-6 col-form-label"
              >
                Diastolic
              </label>
              <input
                type="number"
                className="form-control"
                id="inputBloodPressure"
                placeholder="mm Hg(lower)"
                value={diastolic}
                onChange={e => onFormChange(e)}
              ></input>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default HealthForms;
