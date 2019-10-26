import React from 'react';
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from '@trendmicro/react-sidenav';
import JournalEntry from './JournalEntry';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const JournalEntries = entries => {
  // entries.map(entry => {});
  return (
    <>
      <div id="mySidebar" className="sidebar">
        <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">
          &times;
        </a>
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

      <div id="main">
        <button class="openbtn" onclick="openNav()">
          &#9776; Toggle Sidebar
        </button>
        <h2>Collapsed Sidebar</h2>
        <p>Content...</p>
      </div>
    </>
  );
};

export default JournalEntries;
