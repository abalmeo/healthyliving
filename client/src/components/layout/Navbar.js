import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

const Navbar = ({ auth: { isAuthenticated }, logoutUser }) => {
  const authLinks = (
    <ul className="navbar-nav ml-auto">
      <li className="navbar">
        <a href="" onClick={logoutUser} className="nav-link">
          Logout
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/register">Sign Up</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar">
      <Link className="navbar-brand" to="/">
        Home
      </Link>

      <Link className="navbar-brand" to="/results">
        My Results
      </Link>
      <Link className="navbar-brand" to="/healthforms">
        {' '}
        Health Form
      </Link>
      <Link className="navbar-brand" to="/journalform">
        {' '}
        Journal
      </Link>
      {isAuthenticated ? authLinks : guestLinks}
    </nav>
  );
};

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);
