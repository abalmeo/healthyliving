import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateProfile } from '../../actions/profileAction';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.min.css';

const HealthForms = ({ updateProfile }) => {
  const [healthData, setHealthData] = useState({
    bodyWeight: '',
    bloodGlucose: '',
    systolic: '',
    diastolic: ''
  });

  const { bodyWeight, bloodGlucose, systolic, diastolic } = healthData;

  const [date, setStartDate] = useState(new Date());

  const onChange = e => {
    setHealthData({ ...healthData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();

    const profileData = {};

    profileData.date = date;

    for (let key in healthData) {
      if (healthData[key] !== '') {
        profileData[key] = healthData[key];
      }
    }

    console.log('profileData', profileData);

    updateProfile(profileData);
  };

  return (
    <div className="top-spacing container">
      <form className="form" onSubmit={e => onSubmit(e)}>
        <DatePicker
          className="date"
          selected={date}
          onChange={date => setStartDate(date)}
          dateFormat="MMMM d, yyyy"
        />
        <div className="form-group row">
          <label htmlFor="inputBodyWeight" className="col-sm-12 col-form-label">
            Body Weight
          </label>
          <div className="col-sm-12">
            <input
              type="number"
              className="form-control"
              id="inputBodyWeight"
              name="bodyWeight"
              max="1500"
              placeholder="Body Weight (lbs)"
              value={bodyWeight}
              onChange={e => onChange(e)}
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
              name="bloodGlucose"
              max="3000"
              placeholder="Blood Glucose (mg/dL)"
              value={bloodGlucose}
              onChange={e => onChange(e)}
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
              name="systolic"
              max="250"
              placeholder="mm Hg(higher)"
              value={systolic}
              onChange={e => onChange(e)}
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
              name="diastolic"
              max="140"
              placeholder="mm Hg(lower)"
              value={diastolic}
              onChange={e => onChange(e)}
            ></input>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

HealthForms.prototype = {
  updateProfile: PropTypes.func.isRequired
};

export default connect(
  null,
  { updateProfile }
)(HealthForms);
