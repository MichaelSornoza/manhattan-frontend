import React, { Component } from 'react';
import { Mutation } from 'react-apollo';

import { SignUpEmployee } from '../../mutations/RegisterEmployee';

class TeamModalRegisterForm extends Component {
  state = {
    form: {
      fullname: '',
      phone: '',
      password: '',
      role: null
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]:
          e.target.name === 'role' ? Number(e.target.value) : e.target.value
      }
    });
  };

  handleSubmit = (e, employee_signUp) => {
    e.preventDefault();
    console.log('Registrando Ando');
    employee_signUp()
      .then(data => console.log(data))
      .catch(error => console.log(error));
  };

  render() {
    const { handleCloseModal } = this.props;
    const { handleSubmit, handleChange } = this;
    return (
      <Mutation mutation={SignUpEmployee} variables={this.state.form}>
        {(employee_signUp, { data, loading, error }) => (
          <div>
            {error && console.log(error)}
            {loading || (!data && console.log('Cargando...'))}
            <div className="modal is-active">
              <div className="modal-background" />
              <div className="modal-card">
                <header className="modal-card-head">
                  <p className="modal-card-title">Registro de Empleado</p>
                  <button className="delete" onClick={handleCloseModal} />
                </header>
                <section className="modal-card-body">
                  <form onSubmit={e => handleSubmit(e, employee_signUp)} />
                  <div className="field">
                    <div className="control">
                      <input
                        type="text"
                        className="input"
                        name="fullname"
                        onChange={handleChange}
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="control">
                      <input
                        type="text"
                        className="input"
                        name="phone"
                        onChange={handleChange}
                        placeholder="example@example.com"
                      />
                    </div>
                    <div className="control">
                      <input
                        type="number"
                        className="input"
                        name="role"
                        onChange={handleChange}
                        placeholder="Password"
                      />
                    </div>
                    <div className="control">
                      <input
                        type="password"
                        className="input"
                        name="password"
                        onChange={handleChange}
                        placeholder="Password"
                      />
                    </div>
                  </div>
                </section>
                <footer className="modal-card-foot">
                  <button
                    className="button is-success"
                    onClick={e => handleSubmit(e, employee_signUp)}
                  >
                    Guardar
                  </button>
                  <button
                    className="button is-danger"
                    onClick={handleCloseModal}
                  >
                    Cancelar
                  </button>
                </footer>
              </div>
            </div>
          </div>
        )}
      </Mutation>
    );
  }
}

export default TeamModalRegisterForm;
