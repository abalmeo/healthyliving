import React from 'react';

const JournalEntry = ({ entry }) => {
  return (
    <div className="journal-entry-spacing container">
      <div className="journal-heading">Journal Entries</div>
      {entry.map(entry => (
        <div className>
          <div key={entry.date}>
            <p>Date: {entry.date}</p>
            <p>Title: {entry.title}</p>
            <p>Entry: {entry.entry}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JournalEntry;
