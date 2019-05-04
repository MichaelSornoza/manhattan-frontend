import React, { Component } from 'react';
import { Mutation } from 'react-apollo';

import { UpdateEmployee } from '../../mutations/UpdateEmployee';
import TeamModalRegisterForm from './TeamModalRegister';
import TeamModalEditForm from './TeamModalEdit';

class TeamModal extends Component {
  state = {
    fullname: '',
    role: '',
    phone: ''
  };

  handleChange = e => {
    console.log(e.target);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e, update_my_employee) => {
    e.preventDefault();
    console.log(`I'm Alive`);
    update_my_employee()
      .then(data => {
        console.log(data);
        this.props.modalCloseControl();
      })
      .catch(err => console.log(err));
  };

  render() {
    const { modalCloseControl, modalToOpen, id } = this.props;
    const { fullname, role, phone } = this.state;
    return (
      <div className="modal is-active">
        <div className="modal-background" />
        {modalToOpen === 'modal-register' ? (
          <TeamModalRegisterForm
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            modalCloseControl={modalCloseControl}
          />
        ) : (
          <Mutation
            mutation={UpdateEmployee}
            variables={{ id: id, fullname: fullname, role: role, phone: phone }}
          >
            {(update_my_employee, { data, loading, error }) => (
              <div>
                {error && console.log(error)}
                {loading ? (
                  <h1 className="title">Cargando...</h1>
                ) : (
                  <TeamModalEditForm
                    update_my_employee={update_my_employee}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    modalCloseControl={modalCloseControl}
                    id={id}
                  />
                )}
              </div>
            )}
          </Mutation>
        )}
      </div>
    );
  }
}
export default TeamModal;
