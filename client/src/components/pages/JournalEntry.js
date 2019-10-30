import React from 'react';

const JournalEntry = ({ entry }) => {
  return (
    <div className="journal">
      <div className="container journalEntryAlignment">
        <div className="journalHeading">Journal Entries</div>
        {entry.map(entry => (
          <div className>
            <div key={entry.date} id="accordian">
              <p>Date: {entry.date}</p>
              <p>Title: {entry.title}</p>
              <p>Entry: {entry.entry}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JournalEntry;
