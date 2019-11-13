import React from 'react';

const JournalEntry = ({ entry }) => {
  return (
    <div className="journal-entry-spacing container">
      <div className="journal-heading">
        {entry.length > 0 ? 'Journal Entries' : 'No Current Journal Entries'}
      </div>
      {entry.map(entry => (
        <div className="journal-card">
          <div key={entry.date}>
            <p>Date: {entry.date}</p>
            <p>Title: {entry.title}</p>
            <p>Entry: {entry.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JournalEntry;
