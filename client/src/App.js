import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import HealthForms from "./components/pages/HealthForms";
import Journal from "./components/pages/Journal";
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Route exact path= "/" component={Landing} />
          <Route exact path= "/healthforms" component={HealthForms} />
          <Route exact path= "/journal" component={Journal} />
        </div>
      </Router>
      
    );
  }
}

export default App;
