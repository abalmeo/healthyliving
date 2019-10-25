import React, { useEffect } from 'react';
import Collapsible from 'react-collapsible';

const JournalEntry = entries => {
  // TODO: add useEffect for when props update
  const journalEntry = [
    {
      date: '12/3/2018',
      entry:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
      title: 'First Journal Entry'
    },
    {
      date: '12/2/2018',
      entry: "Lorem Ipsum has been the industry's standard dummy ",
      title: 'Second Journal Entry'
    }
  ];
  return (
    <div className="journal">
      <div className="container journalEntryAlignment">
        <div className="journalHeading">Journal Entries</div>

        <div className>
          {journalEntry.map(profile => (
            <div key={profile.date} id="accordian">
              <Collapsible
                className="collapseStyling"
                trigger={`Date: ${profile.date} Title: ${profile.title}`}
                transitionTime="30"
              >
                <p>{profile.entry}</p>
              </Collapsible>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JournalEntry;
