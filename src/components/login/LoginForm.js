import React from 'react';
import './LoginForm.scss';
import { Link } from 'react-router-dom';

const LoginForm = ({ error, onSubmit, onChange }) => (
  <div className="container has-text-centered">
    <h1 className="title">Login - BrandName</h1>
    <form onSubmit={onSubmit}>
      <div className="container">
        <div className="field">
          <div className="control has-icons-left">
            <input
              type="email"
              name="email"
              onChange={onChange}
              placeholder="Email"
              className={`input ${error ? 'is-danger' : ''}`}
            />
            <span className="icon i-small is-left">
              <i className="fas fa-envelope" />
            </span>
          </div>
          <div className="control has-icons-left has-icons-right">
            <input
              type="text"
              name="password"
              onChange={onChange}
              placeholder="Password"
              type="password"
              className={`input ${error ? 'is-danger' : ''}`}
            />
            <span className="icon i-small is-left">
              <i className="fas fa-lock" />
            </span>
          </div>
        </div>
        <button className="button login-button large">
          <h3 className="subtitle">Login</h3>
        </button>
        <Link to="/register" className="button register-button large">
          <h3 className="subtitle">Register</h3>
        </Link>
      </div>
      <Link to="/recovery-password">Forgot the password</Link>
    </form>
  </div>
);

export default LoginForm;