import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import JournalEntry from './JournalEntry';
import { getCurrentProfile } from '../../actions/profileAction';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const JournalEntries = ({
  getCurrentProfile,
  loading,
  profile: { profile }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  const [journalEntries, setJournalEntries] = useState({
    entries: '',
    currentEntry: ''
  });

  const { entries, currentEntry } = journalEntries;

  const entrySelect = entry => {
    if (!entry) {
      setJournalEntries({ ...journalEntries, currentEntry: '' });
    } else {
      setJournalEntries({ ...journalEntries, currentEntry: entry });
    }
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
    let str = entry.date.substring(0, 10) + ' : ' + entry.title;

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

  return profile === null ? (
    <Loading />
  ) : (
    <>
      <div style={sideBarStyle} className="sidebar">
        <button onClick={() => entrySelect(profile.journalEntry)}>
          <span>View All Entries</span>
        </button>
        {profile.journalEntry &&
          profile.journalEntry.length > 0 &&
          profile.journalEntry.map(entry => (
            <button onClick={() => entrySelect([entry])}>
              <span>{checkTextLength(entry)}</span>
            </button>
          ))}
      </div>

      <div style={mainStyle} className="main">
        <button className="openbtn" onClick={e => toggleSideBar(e)}>
          <i className="fas fa-bars" />
        </button>
        {currentEntry === '' ? '' : <JournalEntry entry={currentEntry} />}
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(JournalEntries);
