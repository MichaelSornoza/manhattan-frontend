import React, { Component } from 'react';
import Header from '../components/layouts/container/Header';
import TeamList from '../components/team/TeamList';
import TeamModal from '../components/team/TeamModal';
class Team extends Component {
  state = {
    team: [
      {
        name: 'Michael'
      },
      {
        name: 'Michael'
      },
      {
        name: 'Michael'
      },
      {
        name: 'Michael'
      },
      {
        name: 'Michael'
      }
    ],
    isOpenModal: false
  };

  handleModal = e => {
    console.log(e.target.name);
    this.setState({
      isOpenModal: !this.state.isOpenModal
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
              name="register"
              onClick={this.handleModal}
            >
              Registrar empleado
            </button>
            <button className="button is-danger">Editar Empleados</button>
          </div>
          {this.state.isOpenModal ? (
            <TeamModal modalControls={this.handleModal} />
          ) : (
            <div />
          )}
          <div className="container">
            <TeamList team={this.state.team} />
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
