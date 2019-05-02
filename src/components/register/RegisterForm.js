import React from 'react';
import { Link } from 'react-router-dom';

import './RegisterForm.scss';

const RegisterForm = ({ signUp, handleSubmit, handleChange }) => (
  <div className="container has-text-centered">
    <h1 className="title title-register">Register - BrandName</h1>
    <form onSubmit={e => handleSubmit(e, signUp)}>
      <div className="container">
        <div className="field">
          <div className="controls">
            <div className="control has-icons-left">
              <input
                type="email"
                className="input"
                placeholder="example@example.com"
                name="email"
                onChange={handleChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope" />
              </span>
            </div>
            <div className="control has-icons-left">
              <input
                type="text"
                className="input"
                placeholder="Full Name"
                name="fullname"
                onChange={handleChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user" />
              </span>
            </div>
            <div className="control has-icons-left">
              <input
                type="text"
                className="input"
                placeholder="Phone Number"
                name="phone"
                onChange={handleChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-phone" />
              </span>
            </div>
            <div className="control has-icons-left">
              <input
                type="text"
                className="input"
                placeholder="City"
                name="city"
                onChange={handleChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-globe" />
              </span>
            </div>
            <div className="control has-icons-left">
              <input
                type="text"
                className="input"
                placeholder="Country"
                name="country"
                onChange={handleChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-globe" />
              </span>
            </div>
            <div className="control has-icons-left">
              <input
                type="text"
                className="input"
                placeholder="Company Name"
                name="company"
                onChange={handleChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-home" />
              </span>
            </div>
            <div className="control has-icons-left">
              <input
                type="password"
                className="input"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock" />
              </span>
            </div>
          </div>
          <div className="buttons-register buttons">
            <button className="button is-medium is-dark" type="submit">
              Sign Up
            </button>
            <Link to="/login" className="button is-medium is-dark">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </form>
  </div>
);

export default RegisterForm;
