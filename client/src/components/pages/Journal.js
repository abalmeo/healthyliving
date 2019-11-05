import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.min.css';

const JournalForm = () => {
  const [journalEntry, setJournalEntry] = useState({
    entryTitle: '',
    entry: ''
  });

  const { entryTitle, entry } = journalEntry;
  const [date, setDate] = useState(new Date());

  const onChange = e => {
    setJournalEntry({ ...journalEntry, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    let data = {
      entryTitle,
      entry,
      date
    };
  };

  return (
    <div className="top-spacing container">
      <form onSubmit={e => onSubmit(e)}>
        <DatePicker
          name="date"
          selected={date}
          onChange={date => setDate(date)}
        />
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
  );
};

export default JournalForm;
