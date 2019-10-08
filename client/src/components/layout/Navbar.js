import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authAction';

const Navbar = ({ auth: { isAuthenticated }, logoutUser }) => {
  const authLinks = (
    <ul className="user-navigation">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/results">My Results</Link>
      </li>
      <li>
        <Link to="/healthforms">Health Form</Link>
      </li>
      <li>
        <Link to="/journalform">Journal</Link>
      </li>
      <li>
        <a href="#!" onClick={logoutUser} className="nav-link">
          Logout
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link className="navbar-brand" to="/register">
          Sign Up
        </Link>
      </li>
      <li>
        <Link className="navbar-brand" to="/login">
          Login
        </Link>
        <Link className="navbar-brand" to="/about">
          About
        </Link>
      </li>
    </ul>
  );

  return <nav></nav>;
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
