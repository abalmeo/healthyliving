import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { registerUser } from '../../actions/authActions';
import { connect } from 'react-redux';

const Register = ({ setAlert, registerUser, isAuthenticated }) => {
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = setRegisterData;

  const onChange = e => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();

    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    }

    registerUser({ name, email, password });
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="register">
      <div className="container">
        <div className="row">
          <h1 className="display-4 text-center">Sign Up</h1>
          <p className="lead text-center">Create your Healthy Living account</p>
          <form onSubmit={e => onSubmit(e)}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Confirm Password"
                name="password2"
                value={password2}
                onChange={e => onChange(e)}
              />
            </div>
            <input
              type="submit"
              className="btn btn-info btn-block mt-4"
              value="Register"
            />
            Already have an account? <Link to="/login">Login</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { setAlert, registerUser }
)(Register);
