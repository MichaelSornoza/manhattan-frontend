import React from 'react';
import { Link } from 'react-router-dom';
import './RegisterForm.scss';

const RegisterForm = ({ onChange, onSubmit }) => (
  <div className="container has-text-centered">
    <h1 className="title title-register">Register - BrandName</h1>
    <form onSubmit={onSubmit}>
      <div className="container">
        <div className="field">
          <div className="controls">
            <div className="control has-icons-left">
              <input
                type="text"
                className="input"
                placeholder="Full Name"
                name="full-name"
                onChange={onChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user" />
              </span>
            </div>
            <div className="control has-icons-left">
              <input
                type="text"
                className="input"
                placeholder="Company Name"
                name="company-name"
                onChange={onChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-home" />
              </span>
            </div>
            <div className="control has-icons-left">
              <input
                type="email"
                className="input"
                placeholder="example@example.com"
                name="email"
                onChange={onChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope" />
              </span>
            </div>
            <div className="control has-icons-left">
              <input
                type="password"
                className="input"
                placeholder="Password"
                name="passsword"
                onChange={onChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock" />
              </span>
            </div>
            <div className="control has-icons-left">
              <input
                type="password"
                className="input"
                placeholder="Password Confirm"
                name="passsword-confirm"
                onChange={onChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock" />
              </span>
            </div>
            <div className="control has-icons-left">
              <input
                type="text"
                className="input"
                placeholder="City"
                name="city"
                onChange={onChange}
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
                onChange={onChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-globe" />
              </span>
            </div>
          </div>
          <div className="buttons-register buttons">
            <button className="button is-medium is-dark" onClick={onSubmit}>
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
