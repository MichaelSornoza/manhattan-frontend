import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { Redirect } from 'react-router-dom';
import { LOGIN } from '../mutations/LoginMutation';

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

  componentDidMount() {}

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
    switch (e.target.name) {
      case 'email':
        this.setState({
          [e.target.name]: e.target.value
        });
        break;
      case 'password':
        this.setState({
          [e.target.name]: e.target.value
        });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <Mutation
        mutation={LOGIN}
        variables={{
          email: this.state.email,
          password: this.state.password
        }}
      >
        {(signIn, { data, loading, error }) => {
          if (error) {
            console.log(error);
          }
          if (loading) {
            return <h1 className="title">CARGANDO...</h1>;
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
