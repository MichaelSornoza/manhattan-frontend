import React, { Component } from 'react';
import RegisterForm from '../components/register/RegisterForm';
import Particles from '../components/particles/Particle';

class Register extends Component {
  state = {
    form: {
      'full-name': '',
      'company-name': '',
      email: '',
      password: '',
      'phone-number': '',
      city: '',
      country: ''
    }
  };
  handleSubmit = e => {
    e.preventDefault();
  };
  handleChange = e => {
    console.log(e);
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
        <Particles />
        <RegisterForm
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Register;
