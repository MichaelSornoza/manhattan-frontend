import React from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.scss';

const LoginForm = ({ signIn, handleSubmit, handleChange }) => (
  <div className="container has-text-centered">
    <h1 className="title title-login">Login - BrandName</h1>
    <form onSubmit={e => handleSubmit(e, signIn)}>
      <div className="container">
        <div className="field">
          <div className="control has-icons-left">
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Email"
              className="input"
            />
            <span className="icon i-small is-left">
              <i className="fas fa-envelope" />
            </span>
          </div>
          <div className="control has-icons-left has-icons-right">
            <input
              type="text"
              name="password"
              onChange={handleChange}
              placeholder="Password"
              type="password"
              className={`input`}
            />
            <span className="icon i-small is-left">
              <i className="fas fa-lock" />
            </span>
          </div>
          <div className="buttons-login buttons">
            <button className="button is-medium is-dark" type="submit">
              Sign In
            </button>
            <Link to="/register" className="button is-medium is-dark">
              Sign Up
            </Link>
          </div>
          <Link to="/recovery-password">Forgot the password</Link>
        </div>
      </div>
    </form>
  </div>
);

export default LoginForm;
