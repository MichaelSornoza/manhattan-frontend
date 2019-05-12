import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import { REGISTER } from '../mutations/Register';

import RegisterForm from '../components/register/RegisterForm';
import Particles from '../components/particles/Particle';

class Register extends Component {
  state = {
    form: {
      email: '',
      fullname: '',
      phone: '',
      company: '',
      city: '',
      country: '',
      password: ''
    }
  };
  handleSubmit = (e, signUp) => {
    e.preventDefault();
    signUp()
      .then(data => {
        localStorage.setItem('token', data.data.signUp.token);
      })
      .catch(err => {
        console.log(err);
      });
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
      <Mutation mutation={REGISTER} variables={this.state.form}>
        {(signUp, { data, loading, error }) => (
          <div>
            {error && <h1 className="title">ERROR...</h1>}
            {loading && <h1 className="titlel">CARGANDO...</h1>}
            {data && <Redirect to="/" />}
            <Particles />
            <RegisterForm
              signUp={signUp}
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
            />
          </div>
        )}
      </Mutation>
    );
  }
}

export default Register;
