import React from 'react';

const JournalEntry = ({ entries }) => {
  console.log('entries', entries);
  return (
    <div className="journal">
      <div className="container journalEntryAlignment">
        <div className="journalHeading">Journal Entries</div>

        <div className>
          {entries.map(profile => (
            <div key={profile.date} id="accordian">
              <p>{profile.entry}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JournalEntry;
