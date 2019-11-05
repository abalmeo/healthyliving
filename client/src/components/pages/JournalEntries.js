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
    width: 250,
    marginLeft: 250
  });

  const { open, width, marginLeft } = sideBar;

  const toggleSideBar = e => {
    if (!open) {
      setSideBar({ ...sideBar, open: true, width: 250, marginLeft: 250 });
    } else if (open) {
      setSideBar({ ...sideBar, open: false, width: 0, marginLeft: 0 });
    }
  };

  // Adjust text length display on sidebar
  const checkTextLength = entry => {
    let str = entry.date + ' : ' + entry.title;

    if (str.length > 30) {
      str = str.substring(0, 28) + '...';
    }

    return str;
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
        <button onClick={() => entrySelect(mockData)}>
          <span>View All Entries</span>
        </button>
        {mockData.map(entry => (
          <button onClick={() => entrySelect([entry])}>
            <span>{checkTextLength(entry)}</span>
          </button>
        ))}
      </div>

      <div style={mainStyle} className="main">
        <button className="openbtn" onClick={e => toggleSideBar(e)}>
          <i className="fas fa-bars" />
        </button>
        <JournalEntry entry={currentEntry} />
      </div>
    </>
  );
};

export default JournalEntries;
