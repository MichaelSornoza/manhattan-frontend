import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import { REGISTER } from '../mutations/RegisterMutation';

import RegisterForm from '../components/register/RegisterForm';
import Particles from '../components/particles/Particle';

class Register extends Component {
  state = {
    email: '',
    fullname: '',
    phone: '',
    company: '',
    city: '',
    country: '',
    password: ''
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
    switch (e.target.name) {
      case 'email':
        this.setState({
          [e.target.name]: e.target.value
        });
        break;
      case 'fullname':
        this.setState({
          fullname: e.target.value
        });
        break;
      case 'phone':
        this.setState({
          [e.target.name]: e.target.value
        });
        break;
      case 'city':
        this.setState({
          [e.target.name]: e.target.value
        });
        break;
      case 'country':
        this.setState({
          [e.target.name]: e.target.value
        });
        break;
      case 'company':
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
        mutation={REGISTER}
        variables={{
          email: this.state.email,
          fullname: this.state.fullname,
          phone: this.state.phone,
          city: this.state.city,
          country: this.state.country,
          company: this.state.company,
          password: this.state.password
        }}
      >
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
