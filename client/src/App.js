import React, { useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';

import About from './components/pages/About';
import HealthForms from './components/pages/HealthForms';
import Results from './components/pages/Results';
import JournalForm from './components/pages/Journal';
import Login from './components/auth/Login';

import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authAction';
import setAuthToken from './utils/setAuthToken';

// Check for token
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/results" component={Results} />

          <Route exact path="/about" component={About} />
          <Route exact path="/healthforms" component={HealthForms} />
          <Route exact path="/journalform" component={JournalForm} />
          <div>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
