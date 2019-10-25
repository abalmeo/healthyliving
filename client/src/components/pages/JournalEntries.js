import React from 'react';
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const JournalEntries = entries => {
  // entries.map(entry => {});
  return (
    <>
      <SideNav
        onSelect={selected => {
          // Add your code here
        }}
      >
        <Toggle />
        <Nav defaultSelected="home">
          <NavItem eventKey="charts/linechart">
            <NavText>Line Chart</NavText>
          </NavItem>
          <NavItem eventKey="charts/barchart">
            <NavText>Bar Chart</NavText>
          </NavItem>
        </Nav>
      </SideNav>
    </>
  );
};

export default JournalEntries;
