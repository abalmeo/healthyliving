import React, { useState } from 'react';
import JournalEntry from './JournalEntry';

const JournalEntries = () => {
  const [journalEntries, setJournalEntries] = useState({});

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

  const [sideBar, setSideBar] = useState({
    open: false,
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
        <button className="btn" href="#">
          About
        </button>
        <button className="btn" href="#">
          Services
        </button>
        <button className="btn" href="#">
          Clients
        </button>
        <button className="btn" href="#">
          Contact
        </button>
      </div>

      <div style={mainStyle} className="main">
        <button className="openbtn" onClick={e => toggleSideBar(e)}>
          &#9776; View Journal Entries
        </button>
        <JournalEntry entries={journalEntry} />
      </div>
    </>
  );
};

export default JournalEntries;
