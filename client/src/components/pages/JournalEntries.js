import React, { useState } from 'react';
import JournalEntry from './JournalEntry';

const JournalEntries = () => {
  // TODO: set up retreival of journal entries using useEffect then fill in state

  const mockData = [
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
    },
    {
      date: '12/4/2018',
      entry: "Lorem Ipsum has been the industry's standard dummy ",
      title: 'Second Journal Entry'
    }
  ];

  const [journalEntries, setJournalEntries] = useState({
    entries: mockData,
    currentEntry: [mockData[0]]
  });

  const { entries, currentEntry } = journalEntries;

  const entrySelect = entry => {
    setJournalEntries({ ...journalEntries, currentEntry: entry });
  };

  const [sideBar, setSideBar] = useState({
    open: true,
    width: 0,
    marginLeft: 0
  });

  const { open, width, marginLeft } = sideBar;

  const toggleSideBar = e => {
    e.preventDefault();
    if (open) {
      setSideBar({ ...sideBar, open: false, width: 250, marginLeft: 250 });
    } else if (!open) {
      setSideBar({ ...sideBar, open: true, width: 0, marginLeft: 0 });
    }
  };

  const sideBarStyle = {
    width
  };

  const mainStyle = {
    width,
    marginLeft
  };

  return (
    <>
      <div style={sideBarStyle} className="sidebar">
        <button className="btn" onClick={() => entrySelect(mockData)}>
          <span>View All Entries</span>
        </button>
        {mockData.map(entry => (
          <button className="btn" onClick={() => entrySelect([entry])}>
            <span>
              {entry.date} : {entry.title}
            </span>
          </button>
        ))}
      </div>

      <div style={mainStyle} className="main">
        <button className="openbtn" onClick={e => toggleSideBar(e)}>
          <span>{open ? 'View More Entries' : 'Minimize'}</span>
        </button>
        <JournalEntry entry={currentEntry} />
      </div>
    </>
  );
};

export default JournalEntries;
