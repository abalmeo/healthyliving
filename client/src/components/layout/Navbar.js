import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

class Navbar extends Component {
    onLogoutClick(e) {
        e.preventDefault();
        this.props.logoutUser();
    }


    render() {
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="navbar">
                    <a
                        href=""
                        onClick={this.onLogoutClick.bind(this)}
                        className="nav-link"
                    >
                        Logout
              </a>
                </li>
            </ul>
        );

        const guestLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="navbar">
                    <Link className="navbar-brand" to="/register">
                        Sign Up
                </Link>
                </li>
                <li className="navbar">
                    <Link className="navbar-brand" to="/login">
                        Login
              </Link>
                </li>
            </ul>
        );

        
        return (
            <nav className="navbar">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        {' '}
                        Home
                  </Link>

                    <div>
                        <Link className="navbar-brand" to="/results">
                            {' '}
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

                    </div>
                </div>
            </nav>
        )
    }
}


Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Navbar);




