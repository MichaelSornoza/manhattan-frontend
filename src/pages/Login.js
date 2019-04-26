import React, { Component } from 'react';
import { Mutation } from 'react-apollo';

import { Link, Redirect } from 'react-router-dom';

import { LOGIN } from '../mutations/LoginMutation';

import '../components/login/LoginForm.scss';
import ParticlesComponent from '../components/particles/Particle';

class Login extends Component {
  state = {
    error: false,
    form: {
      email: '',
      password: ''
    }
  };

  handleSubmit = (e, signIn) => {
    e.preventDefault();
    signIn()
      .then(data => {
        localStorage.removeItem('token');
        localStorage.setItem('token', data.data.signIn.token);
      })
      .catch(err => console.log(err));
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <Mutation
        mutation={LOGIN}
        variables={{
          email: this.state.form.email,
          password: this.state.form.password
        }}
      >
        {(signIn, { data, loading, error }) => (
          <div>
            {error && <h1 className="title">ERROR...</h1>}
            <div>
              <ParticlesComponent />
              <div className="container has-text-centered">
                <h1 className="title title-login">Login - BrandName</h1>
                <form onSubmit={e => this.handleSubmit(e, signIn)}>
                  <div className="container">
                    <div className="field">
                      <div className="control has-icons-left">
                        <input
                          type="email"
                          name="email"
                          onChange={this.handleChange}
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
                          onChange={this.handleChange}
                          placeholder="Password"
                          type="password"
                          className={`input`}
                        />
                        <span className="icon i-small is-left">
                          <i className="fas fa-lock" />
                        </span>
                      </div>
                      <div className="buttons-login buttons">
                        <button
                          className="button is-medium is-dark"
                          type="submit"
                        >
                          Sign In
                        </button>
                        <Link
                          to="/register"
                          className="button is-medium is-dark"
                        >
                          Sign Up
                        </Link>
                      </div>
                      <Link to="/recovery-password">Forgot the password</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </Mutation>
    );
  }
}

export default Login;
