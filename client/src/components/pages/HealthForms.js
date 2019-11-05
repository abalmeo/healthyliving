import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.min.css';

const HealthForms = () => {
  const [healthData, setHealthData] = useState({
    bodyWeight: '',
    bloodGlucose: '',
    bloodPressure: '',
    systolic: '',
    diastolic: ''
  });

  const {
    bodyWeight,
    bloodGlucose,
    bloodPressure,
    systolic,
    diastolic
  } = healthData;

  const [startDate, setStartDate] = useState(new Date());

  const onFormChange = e => {
    setHealthData({ ...healthData, [e.target.name]: e.target.value });
  };

  const onFormSubmit = e => {
    e.preventDefault();
    const data = {
      bodyWeight,
      bloodGlucose,
      bloodPressure,
      systolic,
      diastolic,
      startDate
    };
  };

  return (
    <div className="top-spacing container">
      <form className="form" onSubmit={e => onFormSubmit(e)}>
        <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="time"
          dateFormat="MMMM d, yyyy h:mm aa"
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
              name="bloodGlucose"
              max="3000"
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
              name="systolic"
              max="250"
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
              name="diastolic"
              max="140"
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
  );
};

export default HealthForms;
