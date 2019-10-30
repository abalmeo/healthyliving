import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authAction';

const Navbar = ({ auth: { isAuthenticated, loading }, logoutUser }) => {
  const authLinks = (
    <div>
      <ul className="user-navigation">
        <li>
          <Link style={{ textDecoration: 'none' }} to="/results">
            My Results
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: 'none' }} to="/journalentries">
            Journal Entries
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: 'none' }} to="/healthforms">
            Health Form
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: 'none' }} to="/journalform">
            Journal
          </Link>
        </li>
        <li className="login-register">
          <a style={{ textDecoration: 'none' }} href="#!" onClick={logoutUser}>
            <span> Logout </span>
          </a>
        </li>
      </ul>
    </div>
  );
  const guestLinks = (
    <div>
      <ul className="user-navigation">
        <li>
          <Link style={{ textDecoration: 'none' }} to="/">
            Healthy Living
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: 'none' }} to="/about">
            About
          </Link>
        </li>
        <li className="login-register">
          <Link style={{ textDecoration: 'none' }} to="/login">
            Login
          </Link>
        </li>
      </ul>
    </div>
  );

  return (
    <nav>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
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
