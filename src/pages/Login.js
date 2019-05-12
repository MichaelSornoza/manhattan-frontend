import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { Redirect } from 'react-router-dom';
import { LOGIN } from '../mutations/Login';

import ScreenLoader from '../components/load-screen/ScreenLoader';
import ParticlesComponent from '../components/particles/Particle';
import LoginForm from '../components/login/LoginForm';

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
    localStorage.removeItem('token');
    signIn()
      .then(data => {
        localStorage.setItem('token', data.data.signIn.token);
        console.log(localStorage.getItem('token'));
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
      <Mutation mutation={LOGIN} variables={this.state.form}>
        {(signIn, { data, loading, error }) => {
          if (error) {
            console.log(error);
          }
          if (loading) {
            return <ScreenLoader isActive={true} />;
          }
          if (data) {
            return <Redirect to="/" />;
          }
          return (
            <div>
              <div>
                <ParticlesComponent />
                <LoginForm
                  signIn={signIn}
                  handleSubmit={this.handleSubmit}
                  handleChange={this.handleChange}
                />
              </div>
            </div>
          );
        }}
      </Mutation>
    );
  }
}

export default Login;
