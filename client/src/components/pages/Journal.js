import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { updateJournal } from '../../actions/profileAction';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.min.css';

const JournalForm = ({ isAuthenticated }) => {
  const [journalEntry, setJournalEntry] = useState({
    body: '',
    date: ''
  });

  const { body, title } = journalEntry;
  const [date, setStartDate] = useState(new Date());

  const onChange = e => {
    setJournalEntry({ ...journalEntry, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    const journalData = {
      body,
      title,
      date
    };
    updateJournal(journalData);
  };

  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="top-spacing container">
      <form onSubmit={e => onSubmit(e)}>
        <DatePicker
          className="date"
          selected={date}
          onChange={date => setStartDate(date)}
          dateFormat="MMMM d, yyyy"
        />
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Title of Entry"
            name="title"
            value={title}
            onChange={e => onChange(e)}
          ></input>
        </div>
        <div className="form-group">
          <textarea
            type="text"
            className="form-control"
            placeholder="How are you feeling today?"
            name="body"
            value={body}
            onChange={e => onChange(e)}
            rows="15"
          ></textarea>
        </div>
        <input type="submit" className="btn btn-info btn-block mt-4" />
      </form>
    </div>
  );
};

JournalForm.propTypes = {
  updateJournal: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { updateJournal }
)(JournalForm);
