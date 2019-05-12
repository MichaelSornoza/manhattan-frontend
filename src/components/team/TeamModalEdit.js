import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import { UpdateEmployee } from '../../mutations/UpdateEmployee';

import './TeamModalEdit.scss';

class TeamModalEditForm extends Component {
  state = {
    form: {
      id: this.props.id,
      fullname: '',
      role: null,
      phone: ''
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]:
          e.target.name == 'role' ? Number(e.target.vale) : e.target.value
      }
    });
  };

  handleSubmit = (e, update_my_employee) => {
    e.preventDefault();
    update_my_employee()
      .then(data => window.location.reload())
      .catch(error => console.log(error));
  };

  removeFalsy = obj => {
    let newObj = {};
    Object.keys(obj).forEach(prop => {
      if (obj[prop]) {
        newObj[prop] = obj[prop];
      }
    });
    return newObj;
  };

  render() {
    const { handleCloseModal, id } = this.props;
    const { form } = this.state;
    return (
      <Mutation mutation={UpdateEmployee} variables={this.removeFalsy(form)}>
        {(update_my_employee, { data, loading, error }) => (
          <div>
            {error && console.log(error)}
            {loading || (!data && console.log('Cargando...'))}
            <Query
              query={gql`
                {
                  myEmployee(id: ${id}) {
                    fullname
                    role
                    phone
                  }
                }
             `}
            >
              {({ data, loading, error }) => (
                <div>
                  {error && <h1 className="title">ERROR...</h1>}
                  {loading || !data ? (
                    <h1 className="title">Cargando</h1>
                  ) : (
                    <div className="modal is-active">
                      <div className="modal-background" />
                      <div className="modal-card">
                        <header className="modal-card-head">
                          <p className="modal-card-title">Editar Empleado</p>
                          <button
                            className="delete"
                            onClick={handleCloseModal}
                          />
                        </header>
                        <section className="modal-card-body">
                          <div className="has-text-centered">
                            <h2 className="subtitle employee-subtitle">
                              {data.myEmployee.fullname} - Role:{' '}
                              {data.myEmployee.role} - Phone:{' '}
                              {data.myEmployee.phone}
                            </h2>
                          </div>
                          <form
                            onSubmit={e =>
                              this.handleSubmit(e, update_my_employee)
                            }
                          />
                          <div className="field">
                            <div className="control">
                              <label htmlFor="fullname" className="label">
                                Fullname
                              </label>
                              <input
                                type="text"
                                className="input"
                                name="fullname"
                                onChange={this.handleChange}
                                placeholder={data.myEmployee.fullname}
                              />
                            </div>
                            <div className="control">
                              <label htmlFor="role" className="label">
                                Role
                              </label>
                              <input
                                type="number"
                                className="input"
                                name="role"
                                onChange={this.handleChange}
                                placeholder={data.myEmployee.role}
                              />
                            </div>
                            <div className="control">
                              <label htmlFor="role" className="label">
                                Role
                              </label>
                              <input
                                type="text"
                                className="input"
                                name="phone"
                                onChange={this.handleChange}
                                placeholder={data.myEmployee.phone}
                              />
                            </div>
                          </div>
                        </section>
                        <footer className="modal-card-foot">
                          <button
                            className="button is-success"
                            onClick={e =>
                              this.handleSubmit(e, update_my_employee)
                            }
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
                  )}
                </div>
              )}
            </Query>
          </div>
        )}
      </Mutation>
    );
  }
}

export default TeamModalEditForm;
