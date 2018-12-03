import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import HealthForms from "./components/pages/HealthForms";
import Results from "./components/pages/Results";
import Journal from "./components/pages/Journal";
import Registration from "./components/pages/Registration";
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Route exact path= "/" component={Landing} />
          <Route exact path= "/results" component={Results} />
          <Route exact path= "/registation" component={Registration} />
          <Route exact path= "/healthforms" component={HealthForms} />
          <Route exact path= "/journal" component={Journal} />
        </div>
      </Router>
      
    );
  }
}

export default App;
