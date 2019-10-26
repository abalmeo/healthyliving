import React, { useState } from 'react';

const JournalEntries = entries => {
  const [sideBar, setSideBar] = useState({
    width: 0,
    marginLeft: 0
  });

  const { width, marginLeft } = sideBar;

  const toggleSideBar = e => {
    e.preventDefault();
    if (width === 0 && marginLeft === 0) {
      setSideBar({ ...sideBar, width: 250, marginLeft: 250 });
    } else if (width === 250 && marginLeft === 250) {
      setSideBar({ ...sideBar, width: 0, marginLeft: 0 });
    }

    console.log(sideBar);
  };

  return (
    <>
      <div id="mySidebar" style={sideBar} className="sidebar">
        <button className="closebtn" onClick="closeNav()"></button>
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

      <div className="main" style={sideBar}>
        <button className="openbtn" onClick={e => toggleSideBar(e)}>
          &#9776; Toggle Sidebar
        </button>
        <h2>Collapsed Sidebar</h2>
        <p>Content...</p>
      </div>
    </>
  );
};

export default JournalEntries;
