import React, { Component } from 'react';
import Header from '../components/layouts/container/Header';
import TeamList from '../components/team/TeamList';
import TeamModal from '../components/team/TeamModal';
class Team extends Component {
  state = {
    form: {
      'full-name': '',
      email: '',
      password: '',
      'phone-number': ''
    },
    modalToOpen: '',
    team: [
      {
        name: 'Michael'
      },
      {
        name: 'Michael'
      }
    ],
    isOpenModal: false
  };

  handleOpenModal = e => {
    this.setState({
      modalToOpen: e.target.name,
      isOpenModal: true
    });
  };
  handleCloseModal = () => {
    this.setState({
      isOpenModal: false,
      modalToOpen: ''
    });
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
        <Header />
        <div className="team-page">
          <div className="has-text-centered">
            <h1 className="title team-title">Equipo de Trabajo</h1>
          </div>
          <div className="buttons team-button-group">
            <button
              className="button is-success"
              name="modal-register"
              onClick={this.handleOpenModal}
            >
              Registrar empleado
            </button>
          </div>
          {this.state.isOpenModal ? (
            <TeamModal
              modalCloseControl={this.handleCloseModal}
              modalToOpen={this.state.modalToOpen}
              onSubmit={this.handleSubmit}
              onChange={this.handleChange}
            />
          ) : (
            <div />
          )}
          <div className="container">
            <TeamList
              team={this.state.team}
              handleOpenModal={this.handleOpenModal}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
