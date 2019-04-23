import React, { Component } from 'react';
import LoginForm from '../components/login/LoginForm';
import ParticlesComponent from '../components/particles/Particle';
class Login extends Component {
  state = {
    error: false,
    form: {
      email: '',
      password: ''
    }
  };

  handleSubmit = e => {
    e.preventDefault();
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
      <div>
        <ParticlesComponent />
        <LoginForm
          error={this.state.error}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Login;
