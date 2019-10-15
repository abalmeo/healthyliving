import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import DateTime from '../../components/pages/DatePicker';

const JournalForm = () => {
  const [journalEntry, setJournalEntry] = useState({
    date: Date.now(),
    entryTitle: '',
    entry: ''
  });

  const { date, entryTitle, entry } = journalEntry;

  const onChange = e => {
    setJournalEntry({ ...journalEntry, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    // TODO: add journal entry functionality
  };

  return (
    <div className="journal">
      <div className="container">
        <div></div>
        <DateTime />
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Title of Entry"
              name="entryTitle"
              value={entryTitle}
              onChange={e => onChange(e)}
            ></input>
          </div>
          <div className="form-group">
            <textarea
              type="text"
              className="form-control"
              placeholder="How are you feeling today?"
              name="entry"
              value={entry}
              onChange={e => onChange(e)}
              rows="15"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default JournalForm;
